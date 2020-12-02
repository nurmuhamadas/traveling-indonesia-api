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

  }

  static async updateReview(req, res) {

  }

  static async deleteReview(req, res) {

  }
}

module.exports = ReviewController;
