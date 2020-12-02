const {Router} = require('express');
const DestinationController = require('../controller/destination.controller');
const ReviewController = require('../controller/review.controller');

const router = new Router();

router.route('/').get(DestinationController.getDestinations);
router.route('/search').get(DestinationController.searchDestinations);
router.route('/review/').post(ReviewController.postReview);
router
    .route('/review/:id')
    .get(ReviewController.getReviewById)
    .put(ReviewController.updateReview)
    .delete(ReviewController.deleteReview);

router.route('/:id').get(DestinationController.getDestinationById);

module.exports = router;
