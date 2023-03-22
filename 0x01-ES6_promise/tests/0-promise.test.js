import getResponseFromAPI from '../0-promise';

describe('call Promise', () => {
  it('this test', async () => {
    expect.assertions(1);
    await getResponseFromAPI().then((data) => {
      expect(data).toBe(true);
    });
  });
});
