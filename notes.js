console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  };
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// addNote method creates a txt file, and appends the yargs title and body to
// the document. It also updates notes-data.json with the data for the new note.
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
  notes.push(note);
  saveNotes(notes);
  return note;
  }
};


var getAll = () => {
  console.log(fs.readdir('./'));
};

var getNote = (title) => {
  console.log('Getting note:', title);
  fs.open(`./${title}`, 'r', (err, fd) => {

  });
}

var delNote = (title) => {
var notes = fetchNotes();
filteredNotes = notes.filter((note) => note.title !== title);
saveNotes(filteredNotes);

return notes.length > filteredNotes.length
}

module.exports = {
  addNote,
  getAll,
  getNote,
  delNote,
};
