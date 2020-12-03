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

      let error;
      if (error = ReviewController._validateInput({name, rating, comment})) {
        res.status(400).json(error);
        return;
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
    try {
      const {id} = req.params;
      const {name, rating, comment, review_id: reviewId} = req.body;
      const date = new Date();

      if (!reviewId) {
        res.status(400).json({error: 'review_id is required'});
        return;
      }
      let error;
      if (error = ReviewController._validateInput({name, rating, comment})) {
        res.status(400).json(error);
        return;
      }

      const dataUpdate = {review_id: reviewId, name, rating, comment, date};
      await ReviewsModel.updateReview(id, dataUpdate);
      await DestinationsModel.updateRating(id);

      res.status(200).json({status: 'success', updatedReview: dataUpdate});
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }

  static async deleteReview(req, res) {

  }

  static _validateInput({name, rating, comment}) {
    if (!name || !rating || !comment) {
      return {error: 'All required data must be included'};
    }
    if (typeof rating !== 'number') {
      return {error: 'Rating value must be number, not string'};
    }
    if (rating < 0 || rating > 5) {
      return {error: 'Rating value must less than 5 and grather than 0'};
    }
  }
}

module.exports = ReviewController;
