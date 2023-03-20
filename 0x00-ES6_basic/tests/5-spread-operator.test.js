import concatArrays from '../5-spread-operator';

test('spread operator', () => { 
	expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toBe[
	'a', 'b', 'c',
	'd', 'H', 'e',
	'l', 'l', 'o'
	];
 });
 