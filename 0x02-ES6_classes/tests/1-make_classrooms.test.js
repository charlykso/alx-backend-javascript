import initializeRooms from '../1-make_classrooms';

describe('a test', () => {
  it('different', () => {
    expect.assertions(3);
    const example = initializeRooms();
    expect(example[0]._maxStudentsSize).toBe(19);
    expect(example[1]._maxStudentsSize).toBe(20);
    expect(example[2]._maxStudentsSize).toBe(34);
  });
});
