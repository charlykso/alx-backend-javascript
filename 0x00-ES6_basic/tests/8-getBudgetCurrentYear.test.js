import getBudgetForCurrentYear from '../8-getBudgetCurrentYear';

test('remove empty object', () => { 
	expect(getBudgetForCurrentYear(2100, 5200, 1090)).toEqual({
		'income-2023': 2100, 'gdp-2023': 5200, 'capita-2023': 1090
	});
 });
