function getStudentIdsSum(students) {
  const sum = 0;
  return students.reduce((accumulator, d) => accumulator + d.id, sum);
}

module.exports = getStudentIdsSum;
