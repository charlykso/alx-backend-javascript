import ClassRoom from '../0-classroom';

describe('the first test', () => {
  it('test', () => {
    expect.assertions(1);
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });
});
