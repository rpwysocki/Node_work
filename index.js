const fs = require('fs');

const classMates = ['Erin', 'JT', 'Roman', 'Michael', 'Michael A', 'Matthew', 'Jamil', 'John Paul', 'Brandon', 'Jonathan', 'Francis', 'Anthony', 'Liam', 'Sagal','Thomas', 'Daniel', 'Jeremy', ''];

// fs.writeFile('./test.txt', classMates.map(classMates => classMates + '\n').join(''), (err) => {
//     if (err) throw err;
// });

const addName = process.argv[2]

fs.appendFile('./test.txt', '\n' +  addName, (err) => {
    if (err) throw err;});
