import HolbertonCourse from '../2-hbtn_course';

describe('first', () => {
  it('should', () => {
    expect.assertions(1);
    const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    c1.name = 'Python 101';
    expect(c1.name).toBe('Python 101');
  });
});
