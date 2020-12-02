const {ObjectId} = require('mongodb');
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
      res.status(500).json({error});
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

      const dataInsert = {review_id: reviewId, name, rating, comment, date};
      await ReviewsModel.addReview(id, dataInsert);

      res.status(200).json({status: 'success', insertedReview: dataInsert});
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }

  static async updateReview(req, res) {

  }

  static async deleteReview(req, res) {

  }
}

module.exports = ReviewController;
