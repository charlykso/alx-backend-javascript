import appendToEachArrayValue from '../10-loops';

test('ES6 for... of', () => { 
	expect(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-')).toBe[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ];
 });
 