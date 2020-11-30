const axios = require('axios').default;

describe('Get destination', () => {
  it('should return 20 data when no query specified', async () => {
    const {data} = await axios.get('http://localhost:5000/api/v1/');
    expect(data.length).toEqual(20);
  });

  it('should return limited data when limit query is specified', async () => {
    const {data} = await axios.get('http://localhost:5000/api/v1/?limit=10');
    expect(data.length).toEqual(10);
  });

  it('should return next data when page query is specified', async () => {
    const {data} = await axios.get('http://localhost:5000/api/v1/?page=1');
    expect(data[0].id).toEqual(36);
  });

  describe('should return sorted data when', () => {
    it('sort by name', async () => {
      const result = await axios.get('http://localhost:5000/api/v1/?sort=name');
      expect(result.data[0].id).toEqual(782);
    });

    it('sort by city', async () => {
      result = await axios.get('http://localhost:5000/api/v1/?sort=city');
      expect(result.data[0].id).toEqual(110);
    });

    it('sort by city and descending', async () => {
      result = await axios.get('http://localhost:5000/api/v1/?sort=city&desc=true');
      expect(result.data[0].id).toEqual(496);
    });

    it('sort by region', async () => {
      result = await axios.get('http://localhost:5000/api/v1/?sort=region');
      expect(result.data[0].id).toEqual(200);
    });
  });

  it('should return last data when desc query is true', async () => {
    const {data} = await axios.get('http://localhost:5000/api/v1/?desc=true');
    expect(data[0].id).toEqual(829);
  });

  it('should also can use several queries at a request', async () => {
    const {data} = await axios.get('http://localhost:5000/api/v1/?limit=20&desc=true&sort=name&page=2');
    expect(data.length).toEqual(20);
    expect(data[0].id).toEqual(38);
    expect(data[19].id).toEqual(650);
  });
});
