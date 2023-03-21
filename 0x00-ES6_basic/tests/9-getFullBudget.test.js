import getFullBudgetObject from '../9-getFullBudget';

test('ES6 method properties', () => { 
	const fullBudget = getFullBudgetObject(20, 50, 10);
	expect(fullBudget.getIncomeInDollars(fullBudget.income)).toEqual("$20");
	expect(fullBudget.getIncomeInEuros(fullBudget.income)).toEqual("20 euros");
});
