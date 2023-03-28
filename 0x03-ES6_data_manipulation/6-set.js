function setFromArray(arr) {
  const mySet = new Set();
  arr.forEach((el) => {
    mySet.add(el);
  });
  return mySet;
}

module.exports = setFromArray;
