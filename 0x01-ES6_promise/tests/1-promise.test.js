import getFullResponseFromAPI from '../1-promise';

describe('keep Promise', () => {
  it('promise resolve test', async () => {
    expect.assertions(1);
    await getFullResponseFromAPI(true).then((data) => {
      expect(data).toStrictEqual({ status: 200, body: 'Success' });
    });
  });
  it('promise reject test', async () => {
    expect.assertions(1);
    await getFullResponseFromAPI(false).catch((err) => {
      expect(err).toStrictEqual(Error('The fake API is not working currently'));
    });
  });
});
