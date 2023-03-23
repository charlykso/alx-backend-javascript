import initializeRooms from '../1-make_classrooms';

describe('a test', () => {
  it('different', () => {
    expect.assertions(1);
    const example = initializeRooms();
    expect(example).toBe(['ClassRoom { _maxStudentsSize: 19 }, ClassRoom { _maxStudentsSize: 20 }, ClassRoom { _maxStudentsSize: 34 }',
    ]);
  });
});
