// const chalk = require("chalk");
// const validator = require("validator");
const yargs = require('yargs');
const { addNote, removeNote, getNotes } = require("./notes.js");

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add a new snazzy note',
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }, 
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a snazzy note',
    builder: {
        title: {
            describe: "The title of the note to remove",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all our a snazzy notes',
    handler: function() {
        console.log(getNotes())
    }
})

yargs.parse();



// const msg = getNotes();
// console.log(chalk.green.inverse.bold(msg));
// console.log(process.argv[2])


// writeNotes('WOW')
// console.log(validator.isEmail('wow@gmail.com'))
