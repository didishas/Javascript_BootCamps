console.log(window)
const noteId = location.hash.substring(1);

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const dateElement = document.querySelector('#last-edited');
const link = document.querySelector('a');

let notes = getSavedNotes();
let editNote = notes.find(note => note.id === noteId);

// console.dir(editNote)
if(!editNote) {
    location.assign('./index.html');
}

titleElement.value = editNote.title;
bodyElement.value = editNote.body;
dateElement.textContent = generateLastEdited(editNote.updatedAt);

titleElement.addEventListener('input', function() {
    editNote.title = titleElement.value;
    editNote.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(editNote.updatedAt);
    saveNotes(notes);
})

bodyElement.addEventListener('input', function() { 
    editNote.body = bodyElement.value;
    editNote.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(editNote.updatedAt);
    saveNotes(notes);
})


removeElement.addEventListener('click', function(){
    console.log('removed Element');
    removeNote(editNote);
    saveNotes(notes);
    location.assign('./index.html')
});

window.addEventListener('storage', function(e){
        if (e.key = notes) {
            notes = JSON.parse(e.newValue)
            editNote = notes.find(note => note.id === noteId);

            // console.dir(editNote)
            if(!editNote) {
                location.assign('./index.html');
            }

            titleElement.value = editNote.title;
            bodyElement.value = editNote.body;
            dateElement.textContent = generateLastEdited(editNote.updatedAt);
        }
})


