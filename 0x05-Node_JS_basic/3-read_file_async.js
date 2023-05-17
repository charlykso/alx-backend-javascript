const fs = require('fs');

/**
 * Counts the number of students in a CSV data-file.
 * @param {String} path The path to the CSV data-file.
 */

const countStudents = (path) => new Promise((resolve, reject) => {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error(('Cannot load the database')));
    }
    if (data) {
      const fileContent = data.trim();
      const lines = fileContent.split('\n');
      if (lines.length === 0) {
        throw new Error('Cannot load the database');
      }
      const dbFieldNames = lines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, -1);
      const studentGroups = {};

      for (const line of lines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, -1);
        const field = studentRecord[studentRecord.length - 1];

        studentGroups[field] = studentGroups[field] || [];

        const student = Object.fromEntries(studentPropNames.map((propName,
          idx) => [propName, studentPropValues[idx]]));
        studentGroups[field].push(student);
      }

      const totalStudents = Object.values(studentGroups).flat().length;
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
