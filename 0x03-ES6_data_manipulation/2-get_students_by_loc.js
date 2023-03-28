function getStudentsByLocation(student, city) {
  const list = [];
  return student.filter((d) => {
    if (d.location === city) {
      list.push(d);
    }
    return list;
  });
}

module.exports = getStudentsByLocation;
