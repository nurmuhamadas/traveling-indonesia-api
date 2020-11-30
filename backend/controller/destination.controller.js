const DestinationsModel = require('../models/destinations.model');

class DestinationController {
  static async getDestinations(req, res) {
    const {sort, desc, limit, page} = req.query;

    const response = await DestinationsModel.getDestinations({
      page,
      sort,
      desc,
      destinationsPerPages: limit,
    });

    res.status(200).json(response);
  }
}

module.exports = DestinationController;
