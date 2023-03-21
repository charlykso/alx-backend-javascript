import createEmployeesObject from '../11-createEmployeesObject';

test('iterator', () => { 
	expect(createEmployeesObject("Software", [ "Bob", "Sylvie" ])).toEqual({ Software: [ 'Bob', 'Sylvie' ] });
 });
