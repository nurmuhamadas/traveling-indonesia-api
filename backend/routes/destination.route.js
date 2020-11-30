const {Router} = require('express');
const DestinationController = require('../controller/destination.controller');

const router = new Router();

router.route('/').get(DestinationController.getDestinations);

module.exports = router;
