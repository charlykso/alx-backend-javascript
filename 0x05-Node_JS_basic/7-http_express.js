const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const DbFile = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (path) => new Promise((resolve, reject) => {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    reject(new Error('Cannot load the database'));
  }

  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const fileContent = data.trim();
      const lines = fileContent.split('\n');
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
      }

      const dbFieldNames = lines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, -1);
      const studentGroups = {};

      for (const line of lines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, -1);
        const field = studentRecord[studentRecord.length - 1];

        studentGroups[field] = studentGroups[field] || [];

        const student = Object.fromEntries(
          studentPropNames.map((propName,
            idx) => [propName, studentPropValues[idx]]),
        );
        studentGroups[field].push(student);
      }

      const totalStudents = Object.values(studentGroups).flat().length;
      const response = ['This is the list of our students'];
      const res = [`Number of students: ${totalStudents}`];
      response.push(res);

      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        response.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }

      resolve(response);
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentList = await countStudents(DbFile);
    const response = studentList.join('\n');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(response);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Error processing students.');
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
