const fs = require("fs");
const chalk = require("chalk");


function addNote(title, body) {
  const currentNotes = getNotes();

  const matchingNote = currentNotes.find((note) => note.title === title);
  if (!matchingNote) {
    console.log(chalk.green.bold('Adding a new note!'))
    currentNotes.push({ title, body });
    saveNotes(currentNotes);
  } else {
    console.log(chalk.red.bold(`Error! An entry with title "${title}" already exists!`))
  }
}

function removeNote(title) {
  const currentNotes = getNotes();

  const filteredNotes = currentNotes.filter(note => note.title !== title);

  if(filteredNotes.length < currentNotes.length) {
    console.log(chalk.green.bold('Removing note!'))
  } else {
    console.log(chalk.red.bold('Note not found'))
  }
  saveNotes(filteredNotes)
}

function saveNotes(notes) {
  fs.writeFileSync(__dirname + "/notes.json", JSON.stringify(notes));
}

function getNotes() {
  try {
    const notes = fs.readFileSync("notes.json").toString();
    return JSON.parse(notes);
  } catch (e) {
    return [];
  }
}

module.exports = { getNotes, addNote, removeNote, getNotes };
