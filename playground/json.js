const fs = require('fs');


var obj = {
  name: 'Ben'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name": "Ben", "age": 27}'
person = JSON.parse(personString);
console.log(typeof person);
console.log(person.name);

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(fs.readFileSync('notes.json'));
console.log(typeof note);
console.log(note.title);
 
