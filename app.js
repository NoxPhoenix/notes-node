console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
// console.log('Command: ', command);
// console.log('Yargs: ', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
    if (note !== undefined) {
      console.log('New note', note.title, note.body);
    } else {
      console.log('A note with that title already exists!');
    }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  if (notes.delNote(argv.title) === true) {
    console.log(argv.title, ' was removed.');
  } else {
    console.log('Could not find note!');
  }
  ;
} else {
  console.log('Command not recognized');
};
