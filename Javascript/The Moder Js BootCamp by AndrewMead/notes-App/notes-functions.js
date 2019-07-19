//Reads existing notes from localStorage
const getSavedNotes = function () {
    const noteJson = localStorage.getItem('notes');

    return (noteJson !== null) ? JSON.parse(noteJson) : [];
    
}

//#region Global Functions
const display = function(note) {
    const html = `
    <li>
        <label for="titre">Titre: ${note.title}</label>
        <p>Body: ${note.body}</p>
    </li>`
    document.querySelector('.note-list').insertAdjacentHTML('beforeend', html)
}

const removeNote = function(note) {
    note.remove();
}

const renderNotes = function(notes) {
    notes.forEach(note => display(note));
}

//#endregion