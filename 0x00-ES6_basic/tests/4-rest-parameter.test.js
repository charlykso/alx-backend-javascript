import returnHowManyArguments from '../4-rest-parameter';

test('return the number of args', () => { 
	expect(returnHowManyArguments("one")).toBe(1);
	expect(returnHowManyArguments("one", "two", 3, "4th")).toBe(4);
 });
