console.log('Starting notes.js');

const fs = require('fs');


// addNote method creates a txt file, and appends the yargs title and body to
// the document.
var addNote = (title, body) => {
  console.log('Adding note', title, body);
  fs.writeFile(`${title}.txt`, body, (err) => {
    if (err) throw err;
  console.log('Note added');
});
};

var getAll = () => {
  fs.
}

module.exports = {
  addNote;

};
