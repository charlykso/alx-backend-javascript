import getNeighborhoodsList from "../2-arrow"

test('change to arrow function', () => { 
	const neighborhoodsList = new getNeighborhoodsList();
	expect(neighborhoodsList.addNeighborhood('Noe Valley')).toBe[ 'SOMA', 'Union Square', 'Noe Valley' ];
 });
 