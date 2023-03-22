import handleResponseFromAPI from '../2-then';

describe('test promise', () => {
  it('test resolve', async () => {
    expect.assertions(1);
    await handleResponseFromAPI(true).then((data) => {
      expect(data).toStrictEqual({ status: 200, body: 'Success' });
    });
  });
  it('test it', async () => {
    expect.assertions(1);
    await handleResponseFromAPI(true).catch((err) => {
      expect(err).toStrictEqual();
    });
  });
});
