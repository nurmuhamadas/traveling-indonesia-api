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

  static async getDestinationById(req, res) {
    try {
      const {id} = req.params;
      const destination = await DestinationsModel
          .getDestinationById(id);
      if (!destination) {
        res.status(404).json({error: 'Destination with given id is not found'});
        return;
      }
      res.status(200).json(destination);
    } catch (error) {
      console.log(error);
      res.status(500).json({error});
    }
  }
}

module.exports = DestinationController;
