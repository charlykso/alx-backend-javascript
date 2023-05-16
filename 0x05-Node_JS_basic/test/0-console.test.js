import displayMessage from '../0-console';

describe('displayMessage', () => {
  let spy;
  it('should write the provided message to stdout', () => {
    expect.assertions(1); // Expecting one assertion

    const message = 'Hello, world!';
    displayMessage(message);
    expect(spy).toHaveBeenCalledWith(`${message}\n`);
  });
});
