const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 1245;

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
      const response = [`Number of students: ${totalStudents}`];

      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        response.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }

      resolve(response);
    }
  });
});

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const path = 'database.csv';
      const studentList = await countStudents(path);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('This is the list of our students\n');
      for (const student of studentList) {
        res.write(`${student} \n`);
      }
      res.end();
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error processing students.');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found.');
  }
});

app.listen(port, hostname);

module.exports = app;
