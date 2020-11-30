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
    try {
      cursor = await destinations
          .find(query)
          .project(project)
          .sort(sorter);
    } catch (error) {
      console.error(`Unable to issue find command, ${error}`);
      return [];
    }

    const displayCursor = await cursor.limit(destinationsPerPages)
        .skip(destinationsPerPages * page);

    return displayCursor.toArray();
  }

  static textQuery({sort, desc}) {
    const query = {};
    const project = {};
    const sorter = {[sort]: desc? -1 : 1};

    return {query, project, sorter};
  }
}

module.exports = DestinationsModel;
