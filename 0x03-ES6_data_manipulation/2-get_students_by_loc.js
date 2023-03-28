function getStudentsByLocation(student, city) {
  if (student instanceof Array) {
    return student.filter((d) => d.location === city);
  }
  return [];
}

module.exports = getStudentsByLocation;
