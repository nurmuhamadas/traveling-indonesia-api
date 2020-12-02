const axios = require('axios').default;

describe('Search destination:', () => {
  it('should return destinations list that match with name given',
      async () => {
        const {data} = await axios.get('http://localhost:5000/api/v1/destinations/search/?name=masj&limit=0');
        const length = data.length;
        expect(length).toEqual(26);
        expect(data[0].id).toEqual(1);
        expect(data[length - 1].id).toEqual(818);
      });

  it('should return destinations list that match with location given',
      async () => {
        const {data} = await axios.get('http://localhost:5000/api/v1/destinations/search/?location=sur&limit=0');
        const length = data.length;
        expect(length).toEqual(19);
        expect(data[0].id).toEqual(373);
        expect(data[length - 1].id).toEqual(643);
      });

  it('should return destinations list that match with a category given',
      async () => {
        const {data} = await axios.get('http://localhost:5000/api/v1/destinations/search/?categories=religi&limit=0');
        const length = data.length;
        expect(length).toEqual(29);
        expect(data[0].id).toEqual(1);
        expect(data[length - 1].id).toEqual(818);
      }, 7000);

  it('should return destinations that match with multiple categories given',
      async () => {
        const {data} = await axios.get('http://localhost:5000/api/v1/destinations/search/?categories=religi,budaya&limit=0');
        const length = data.length;
        expect(length).toEqual(35);
        expect(data[0].id).toEqual(1);
        expect(data[length - 1].id).toEqual(818);
      }, 7000);

  it('also can use multiple query', async () => {
    const {data} = await axios.get('http://localhost:5000/api/v1/destinations/search/?name=as&categories=alam&location=re&limit=0');
    const length = data.length;
    expect(length).toEqual(2);
    expect(data[0].id).toEqual(344);
    expect(data[length - 1].id).toEqual(362);
  });

  it('also can use common query', async () => {
    const {data} = await axios.get('http://localhost:5000/api/v1/destinations/search/?name=as&categories=alam&limit=0&sort=name&desc=true');
    const length = data.length;
    expect(length).toEqual(38);
    expect(data[0].id).toEqual(780);
    expect(data[length - 1].id).toEqual(155);
  });

  it('also support pagination', async () => {
    const {data} = await axios.get('http://localhost:5000/api/v1/destinations/search/?name=as&categories=alam&page=1&sort=name&desc=true');
    const length = data.length;
    expect(length).toEqual(18);
    expect(data[0].id).toEqual(646);
    expect(data[length - 1].id).toEqual(155);
  });
});
