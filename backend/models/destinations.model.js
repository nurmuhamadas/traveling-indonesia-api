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
    const {query, project, sorter} = this.textQuery({sort, desc});
    let cursor;
    const limit = destinationsPerPages == 0? 20 :
    parseInt(destinationsPerPages);
    try {
      cursor = await destinations
          .find(query)
          .project(project)
          .sort(sorter);
    } catch (error) {
      console.error(`Unable to issue find command, ${error}`);
      return [];
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
}

module.exports = DestinationsModel;
