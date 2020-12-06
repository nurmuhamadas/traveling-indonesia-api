import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/destinations';

export default class DestinationApi {
  static async getDestinationsByCategory({category, limit}) {
    const {data} = await axios
        .get(`${BASE_URL}/search/?categories=${category}&limit=${limit}`);
    return data;
  }
}
