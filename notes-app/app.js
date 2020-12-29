// const chalk = require('chalk')
const notes = require('./notes')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.0.1')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      desc: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    // console.log('Title: '+ argv.title + '\nBody: ' + argv.body)
    notes.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function () {
    console.log('Removing the note')
  }
})

yargs.parse()
