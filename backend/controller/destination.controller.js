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

    res.json(response);
  }
}

module.exports = DestinationController;
