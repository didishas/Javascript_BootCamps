const noteId = location.hash.substring(1);

const notes = getSavedNotes();

const editNote = notes.find(note => note.id === noteId);
console.log(editNote)
if(editNote === undefined) {
    location.assign('./index.html');
}else {
    const title = document.querySelector('input')
    const texteArea = document.querySelector('textarea');
    title.value = editNote.title;
    texteArea.value = editNote.body;
}

