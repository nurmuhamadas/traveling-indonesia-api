/* eslint-disable max-len */
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/destinations';

export default class DestinationApi {
  static async getDestinationsByCategory({category, limit, page}) {
    const {data} = await axios.get(
        `${BASE_URL}/search/?categories=${category}&limit=${limit}&page=${page}`,
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
