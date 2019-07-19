console.log('Starting ...');

let notes = [];

// checking if localStorage is empty
const noteJson = localStorage.getItem('notes');

if(noteJson !== null){
    notes = JSON.parse(noteJson);
}
//Html Elements
const noteList = document.querySelector('.note-list');
const createBtn = document.querySelector('#create-btn');
const deleteBtn = document.querySelector('#delete-btn');
const searchText = document.getElementById('search-text');
const form = document.getElementById('note-form')

//#region Global Functions
const display = function(note) {
    const html = `
    <li>
        <label for="titre">Titre: ${note.title}</label>
        <p>Body: ${note.body}</p>
    </li>`
    noteList.insertAdjacentHTML('beforeend', html)
}

const removeNote = function(note) {
    note.remove();
}

const renderNotes = function(notes) {
    notes.forEach(note => display(note));
}
//#endregion

renderNotes(notes);

//#region Event Listeners
createBtn.addEventListener('click', function(e){
    e.preventDefault();
    const title = form.elements.newTitle.value;
    const body = form.elements.newNote.value;
    notes.push({
        title: `${title}` || 'unnamed note',
        body: `${body}`
    })
    localStorage.setItem('notes', JSON.stringify(notes));
    noteList.innerHTML = '';
    renderNotes(notes);
    console.log(form.elements.newNote.value)
    form.elements.newNote.value = '';
    form.elements.newTitle.value = '';
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    display({
        title: 'New Note',
        body: 'New instructions'
    })
    console.log(form.elements.newNote.value);
    form.elements.newNote.value = '';
    console.log('A note is created.')
})

searchText.addEventListener('input', function(e){
    console.log(e.target.value);
    noteList.innerHTML = '';
    const filteredNotes = notes.filter(note => {
        return (note.body.toLowerCase().includes(e.target.value) || note.title.toLowerCase().includes(e.target.value))
    });
    renderNotes(filteredNotes);
})

form.elements.checkbox.addEventListener('change', () => {
    console.log('het')
})
//#endregion

document.querySelector('select#sorting').addEventListener('change', (e) => console.log(e.target.value));

