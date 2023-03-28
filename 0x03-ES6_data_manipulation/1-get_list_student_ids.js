function getListStudentIds(data) {
  const ids = [];
  if (!Array.isArray(data)) {
    return ids;
  }

  data.map((data) => ids.push(data.id));

  return ids;
}

module.exports = getListStudentIds;
