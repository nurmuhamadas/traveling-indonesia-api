const axios = require('axios').default;

const DESTINATION_ID = '5fc1a02191ce582470a4793e';

describe('Destination review:', () => {
  it('should can get a rview by destination id', async () => {
    const {data} = await axios.get(`http://localhost:5000/api/v1/destinations/review/${DESTINATION_ID}`);
    expect(data.destination_id).toEqual(DESTINATION_ID);
  });
});
