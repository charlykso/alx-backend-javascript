import getBudgetObject from '../7-getBudgetObject';

test('modify object', () => { 
	expect(getBudgetObject(400, 700, 900)).toBe("{ income: 400, gdp: 700, capita: 900 }");
 });
