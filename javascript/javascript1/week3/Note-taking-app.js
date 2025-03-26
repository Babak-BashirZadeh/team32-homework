const notes = [];
function saveNote (content, id) {
  notes.push ({
    content: content,
    id: id,
  }); 
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

function getNote(id) {
 for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
        return notes[i]; 
    }
    else {
        console.log(`note not found with id: ${id}`);
    }
 }
}
const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        let note = notes[i];
        console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`)
    }
}
logOutNotesFormatted();
