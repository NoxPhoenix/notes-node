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
  return note
  }
};

var getAll = (cb) => {
  var notes = fetchNotes();
  return cb(notes)
};

var getNote = (title) => {
  var notes = fetchNotes();
  var note = notes.filter((a) => a.title === title);

  return note[0];

};

var delNote = (title) => {
var notes = fetchNotes();
filteredNotes = notes.filter((note) => note.title !== title);
saveNotes(filteredNotes);

return notes.length > filteredNotes.length;
}

var logNote = (note) => {
  console.log('---')
  console.log('Title: '+note.title);
  console.log('Title: '+note.body);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  delNote,
  logNote
};
