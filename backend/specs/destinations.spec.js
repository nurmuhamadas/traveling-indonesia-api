const axios = require('axios').default;

describe('Get destination', () => {
  it('should return 20 data if no query specified', async () => {
    const {data} = await axios.get('http://localhost:5000/api/v1/destinations/');
    expect(data.length).toEqual(20);
  });

  it('should return limited data if limit query is specified', async () => {
    const {data} = await axios.get('http://localhost:5000/api/v1/destinations/?limit=10');
    expect(data.length).toEqual(10);
  });

  it('should return next data if page query is specified', async () => {
    const {data} = await axios.get('http://localhost:5000/api/v1/destinations/?page=1');
    expect(data[0].id).toEqual(36);
  });

  describe('should return sorted data if', () => {
    it('sort by name', async () => {
      const result = await axios.get('http://localhost:5000/api/v1/destinations/?sort=name');
      expect(result.data[0].id).toEqual(782);
    });

    it('sort by city', async () => {
      result = await axios.get('http://localhost:5000/api/v1/destinations/?sort=city');
      expect(result.data[0].id).toEqual(110);
    });

    it('sort by city and descending', async () => {
      result = await axios.get('http://localhost:5000/api/v1/destinations/?sort=city&desc=true');
      expect(result.data[0].id).toEqual(496);
    });

    it('sort by region', async () => {
      result = await axios.get('http://localhost:5000/api/v1/destinations/?sort=region');
      expect(result.data[0].id).toEqual(200);
    });
  });

  it('should return last data when desc query is true', async () => {
    const {data} = await axios.get('http://localhost:5000/api/v1/destinations/?desc=true');
    expect(data[0].id).toEqual(829);
  });

  it('should also can use several queries at a request', async () => {
    const {data} = await axios.get('http://localhost:5000/api/v1/destinations/?limit=20&desc=true&sort=name&page=2');
    expect(data.length).toEqual(20);
    expect(data[0].id).toEqual(38);
    expect(data[19].id).toEqual(650);
  });

  describe('hanlde unexpected request:', () => {
    it(`should return default destination list when 
      unexpected sort value is given`, async () => {
      const {data} = await axios.get('http://localhost:5000/api/v1/destinations/?sort=www');
      expect(data[0].id).toEqual(1);
    });

    it(`should return default limit data when 
      limit=0 is given`, async () => {
      const {data} = await axios.get('http://localhost:5000/api/v1/destinations/?limit=0');
      expect(data.length).toEqual(20);
    });

    it(`should return default sorted data when 
      unexpected desc value is given`, async () => {
      const {data} = await axios.get('http://localhost:5000/api/v1/destinations/?desc=www');
      expect(data[0].id).toEqual(1);
    });
  });
});

describe('Get destination by id:', () => {
  it('should return a destination with specified id', async () => {
    const id = 2;
    const {data} = await axios.get(`http://localhost:5000/api/v1/destinations/${id}`);
    expect(data.id).toEqual(2);
  });

  it('should return a destination with specified _id', async () => {
    const _id = '5fc1a02191ce582470a4793f';
    const {data} = await axios.get(`http://localhost:5000/api/v1/destinations/${_id}`);
    expect(data.id).toEqual(2);
  });
});
