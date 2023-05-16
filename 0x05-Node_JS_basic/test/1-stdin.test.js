const { spawn } = require('../1-stdin');

describe('1-stdin.js', () => {
  let process;

  // eslint-disable-next-line jest/no-hooks
  beforeEach(() => {
    process = spawn('node', ['1-stdin.js']);
  });

  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    process.kill();
  });

  // eslint-disable-next-line jest/no-test-callback
  it('should display welcome message and process user input correctly', (done) => {
    expect.assertions(2);

    const name = 'John';

    process.stdout.once('data', (data) => {
      expect(data.toString()).toBe('Welcome to Holberton School, what is your name?\n');

      process.stdin.write(`${name}\n`);

      process.stdout.once('data', (data) => {
        expect(data.toString()).toBe(`Your name is: ${name}\n`);
        done();
      });
    });
  });

  // eslint-disable-next-line jest/no-test-callback
  it('should close the program when "exit" is entered', (done) => {
    expect.assertions(1);

    process.stdout.once('data', () => {
      process.stdin.write('exit\n');

      process.stdout.once('data', (data) => {
        expect(data.toString()).toBe('This important software is now closing');
        done();
      });
    });
  });
});
