const {Router} = require('express');
const DestinationController = require('../controller/destination.controller');

const router = new Router();

router.route('/').get(DestinationController.getDestinations);
router.route('/search').get(DestinationController.searchDestinations);
router.route('/:id').get(DestinationController.getDestinationById);

module.exports = router;
