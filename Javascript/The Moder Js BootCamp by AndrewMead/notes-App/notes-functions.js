//Reads existing notes from localStorage
const getSavedNotes = function () {
    const noteJson = localStorage.getItem('notes');
    return (noteJson !== null) ? JSON.parse(noteJson) : [];
}

const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

//#region Global Functions
const display = function(note) {
    const html = `
    <li data-id=${note.id}>
        <i class="far fa-trash-alt"></i>   <label for="titre"><a href="./edit.html#${note.id}">Titre: ${note.title} </a></label>
        <p>Body: ${note.body}</p> 
    </li>`
    document.querySelector('.note-list').insertAdjacentHTML('beforeend', html);
}


const removeNote = function(noteToFound) {
    const indexNote = notes.findIndex(note => note.id === noteToFound.id);
    notes.splice(indexNote, 1);
}

const renderNotes = function(notes) {
    debugger;
    notes.forEach(note => display(note));
    const trashIcons = document.querySelectorAll('i');
    trashIcons.forEach(trashIcon => {
        trashIcon.addEventListener('click', function(e) {
            console.log('note with id:',e.target.parentNode.getAttribute('data-id'), ' is removed');
            e.target.parentNode.remove();
            const indexRemoveNote = notes.findIndex(note => note.id === e.target.parentNode.getAttribute('data-id'));
            notes.splice(indexRemoveNote, 1)
            saveNotes(notes);
        })
    });
}
//#endregion