const axios = require('axios').default;

const DESTINATION_ID = '5fc1a02191ce582470a4793e';
const dataInsert = {
  name: 'john',
  rating: 3,
  comment: 'sangat dingin',
};

describe('Destination review:', () => {
  it('should can get a review by destination id', async () => {
    const {data} = await axios.get(`http://localhost:5000/api/v1/destinations/review/${DESTINATION_ID}`);
    expect(data.destination_id).toEqual(DESTINATION_ID);
  });

  xit('should can post a review and get review inserted', async () => {
    const {data} = await axios.post(
        `http://localhost:5000/api/v1/destinations/review/${DESTINATION_ID}`,
        dataInsert,
    );
    expect(data.status).toEqual('success');
    expect(data.insertedReview.name).toEqual('john');
  });
});
