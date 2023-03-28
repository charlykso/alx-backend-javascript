function getString(str) {
  const obj = {
    a: '4',
    b: '6',
    B: '8',
    z: '2',
    i: '1',
    o: '0',
    e: '3',
    f: '7',
  };

  const newStr = str.split('');
  const objKeys = Object.keys(obj);
  const objValues = Object.values(obj);

  for (let index = 0; index < newStr.length; index + 1) {
    for (let j = 0; j < objKeys.length; j + 1) {
      if (newStr[index] === objKeys[j]) {
        newStr[index] = objValues[j];
        break;
      }
    }
  }
  return newStr.join('');
}

module.exports = getString;
