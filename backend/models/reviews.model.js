const {ObjectId} = require('mongodb');

let reviews;

class ReviewsModel {
  static async injectDB(connection) {
    try {
      if (reviews) {
        return;
      }
      reviews = await connection.db(process.env.DESTINATION_DB)
          .collection('reviews');
    } catch (error) {
      console.error(
          `Unable to establish a collection handle in reviewModel: 
          ${error}`,
      );
    }
  }

  static async getReviewById(id) {
    const query = {destination_id: new ObjectId(id)};
    try {
      return await reviews.findOne(query);
    } catch (error) {
      console.error(`Something went wrong in getMovieByID: ${error}`);
      throw new Error(error);
    }
  }

  static async addReview(id, review) {
    const query = {destination_id: new ObjectId(id)};

    try {
      return await reviews.updateOne(query, {$push: {reviews: review}});
    } catch (error) {
      console.error(`Something went wrong in getMovieByID: ${error}`);
      throw new Error(error);
    }
  }

  static async updateReview(id, review) {
    const reviewId = new ObjectId(review.review_id);
    const query = {
      'destination_id': new ObjectId(id),
      'reviews.review_id': reviewId,
    };

    try {
      return await reviews.updateOne(
          query,
          {$set: {'reviews.$': {...review, review_id: reviewId}}},
      );
    } catch (error) {
      console.error(`Something went wrong in getMovieByID: ${error}`);
      throw new Error(error);
    }
  }

  static async deleteReview(id, reviewId) {
    const query = {'destination_id': new ObjectId(id)};

    try {
      return await reviews.updateOne(
          query,
          {$pull: {reviews: {review_id: new ObjectId(reviewId)}}},
      );
    } catch (error) {
      console.error(`Something went wrong in getMovieByID: ${error}`);
      throw new Error(error);
    }
  }
}

module.exports = ReviewsModel;
