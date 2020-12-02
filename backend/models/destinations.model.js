const {ObjectId} = require('mongodb');

let destinations;

class DestinationsModel {
  static async injectDB(connection) {
    try {
      destinations = await connection.db(process.env.DESTINATION_DB)
          .collection('data');
    } catch (error) {
      console.error(
          `Unable to establish a collection handle in DestinationsModel: 
          ${error}`,
      );
    }
  }

  static async getDestinations({
    filters = null,
    page = 0,
    sort = 'id',
    desc = false,
    destinationsPerPages = 20,
  } = {}) {
    let cursor;
    const limit = parseInt(destinationsPerPages);
    const queryParams = this.textQuery({sort, desc});

    if (filters) {
      queryParams.query = this.filterQuery(filters);
    }

    const {query, project, sorter} = queryParams;

    try {
      cursor = await destinations
          .find(query)
          .project(project)
          .sort(sorter);
    } catch (error) {
      console.error(`Unable to issue find command, ${error}`);
      return [];
    }

    if (limit === 0) {
      return cursor.toArray();
    }

    const displayCursor = await cursor.limit(limit)
        .skip(limit * page);

    return displayCursor.toArray();
  }

  static textQuery({sort, desc}) {
    const query = {};
    const project = {};
    if (['region', 'city'].includes(sort)) {
      sort = `location.${sort}`;
    }
    const sorter = {[sort]: desc === 'true'? -1 : 1};

    return {query, project, sorter};
  }

  static filterQuery(filters) {
    const query = {};
    if (filters.name) {
      query.name = {$regex: filters.name, $options: 'i'};
    }
    if (filters.location) {
      query.$or = [
        {'location.region': {$regex: filters.location, $options: 'i'}},
        {'location.city': {$regex: filters.location, $options: 'i'}},
        {'location.district': {$regex: filters.location, $options: 'i'}},
        {'location.village': {$regex: filters.location, $options: 'i'}},
      ];
    }
    if (filters.categories) {
      const categories = filters.categories.split(',');
      query.categories = {$in: categories};
    }
    if (filters.rating) {
      query.rating = {$gte: parseInt(filters.rating)};
    }

    return query;
  }

  static async getDestinationById(id) {
    const query = this.idQuery(id);
    try {
      return await destinations.findOne(query);
    } catch (error) {
      console.error(`Something went wrong in getMovieByID: ${error}`);
      throw new Error(error);
    }
  }

  static idQuery(id) {
    if (id.length === 24) {
      return {_id: new ObjectId(id)};
    }
    return {id: parseInt(id)};
  }
}

module.exports = DestinationsModel;
