#!/usr/bin/node

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const chunk = data.toString().trim();

  process.stdout.write(`Your name is: ${chunk}\n`);
  process.stdout.write('This important software is now closing');
  process.exit();
});
