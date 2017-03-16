console.log('Starting app.js');

const fs = require('fs');
// const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
// console.log('Command: ', command);
// console.log('Yargs: ', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
    if (note !== undefined) {
      console.log('New note...')
      notes.logNote(note);
    } else {
      console.log('A note with that title already exists!');
    }
} else if (command === 'list') {
  var noteList = notes.getAll((a) => {
  for (var i = 0; i < a.length; i++) {
    notes.logNote(a[i])
  }
  });
  
} else if (command === 'read') {
  var noteOpen = notes.getNote(argv.title);
  if (noteOpen === undefined) {
    console.log(argv.title+' not found!');
  } else {
    console.log('Opening '+ noteOpen.title);
    notes.logNote(noteOpen)
  }
} else if (command === 'remove') {
  var noteRemoved = notes.delNote(argv.title)
  var message = noteRemoved ? argv.title+' was removed' : argv.title+' not found.'
  console.log(message)
} else {
  console.log('Command not recognized');
};
