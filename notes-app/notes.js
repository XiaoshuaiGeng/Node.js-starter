const fs = require('fs')

const getNotes = () => {
  return 'Your Notes'
}

/**
 * add note to notes list, note to be added with existing title will be ignored
 * @param {string} title note title
 * @param {string} body note body
 */
const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
  } else {
    console.log('Note title taken!')
  }

  saveNotes(notes)
}

/**
 * Save note to notes.json
 * @param {JSON} notes note object
 */
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('./notes.json', dataJSON)
}

/**
 * Remove a note from notes.json
 * @param {*} title note title of the deleted note
 * @returns {Array} deleted note
 */
const removeNote = (title) => {
  // get the note that need to be deleted
  const deletedNotes = loadNotes().filter((note) => {
    return note.title === title
  })

  // notes that need to be saved
  const notes = loadNotes().filter((note) => {
    return note.title !== title
  })
  if (notes.length > 0) {
    saveNotes(notes)
    return deletedNotes
  }
  return []
}

/**
 * load notes from file
 */
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const listNotes = () => {
  try {
    const data = fs.readFileSync('notes.json')
    const dataJSON = JSON.parse(data.toString())

    dataJSON.forEach(element => {
      console.log(element.title)
    })
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
}
