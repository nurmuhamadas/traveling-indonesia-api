/* eslint-disable max-len */
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/destinations';

export default class DestinationApi {
  static async searchDestination({name, location, categories, rating,
    sort, desc, limit = 20, page}) {
    let query = '';
    query += name? `&name=${name}`: '';
    query += location? `&location=${location}`: '';
    query += categories? `&categories=${categories}`: '';
    query += rating? `&rating=${rating}`: '';

    const {data} = await axios.get(
        `${BASE_URL}/${query? 'search/' : ''}?sort=${sort}&desc=${desc}&limit=${limit}&page=${page}${query}`,
    );
    return data;
  }

  static async getDestinationById(id) {
    const {data} = await axios
        .get(`${BASE_URL}/${id}`);
    return data;
  }

  static async getDestinations({
    limit = 20,
    page = 0,
    sort = 'id',
    desc = '',
  }) {
    const {data} = await axios.get(`${BASE_URL}/?limit=${limit}&page=${page}&sort=${sort}&desc=${desc}`);
    return data;
  }
}
