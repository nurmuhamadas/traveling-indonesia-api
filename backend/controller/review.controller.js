const {ObjectId} = require('mongodb');
const DestinationsModel = require('../models/destinations.model');
const ReviewsModel = require('../models/reviews.model');

class ReviewController {
  static async getReviewById(req, res) {
    try {
      const {id} = req.params;
      const review = await ReviewsModel.getReviewById(id);
      if (!review) {
        res.status(404).json({error: 'Review with given id is not found'});
        return;
      }
      res.status(200).json(review);
    } catch (error) {
      console.log(error);
      res.status(500).json({error: error.message});
    }
  }

  static async postReview(req, res) {
    try {
      const {id} = req.params;
      const {name, rating, comment} = req.body;
      const date = new Date();
      const reviewId = new ObjectId();

      if (!name || !rating || !comment) {
        res.status(400).json({error: 'All required data must be included'});
        return;
      }
      if (rating < 0 || rating > 5) {
        res.status(400)
            .json({error: 'Rating value must less than 5 and grather than 0'});
        return;
      }
      if (typeof rating !== 'number') {
        throw new Error('Rating value must be number, not string');
      }

      const dataInsert = {review_id: reviewId, name, rating, comment, date};
      await ReviewsModel.addReview(id, dataInsert);
      await DestinationsModel.updateRating(id);

      res.status(200).json({status: 'success', insertedReview: dataInsert});
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }

  static async updateReview(req, res) {

  }

  static async deleteReview(req, res) {

  }

  static _validateRating(rating) {
    
  }
}

module.exports = ReviewController;
