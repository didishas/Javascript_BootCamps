console.log('Starting ...');

const notes = [{
    title: 'My next trip',
    body: 'I would like to swim'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}];

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
    display({
        title: 'New Note',
        body: 'New instructions'
    })
    console.log('A note is created.')
    console.log(form.elements.newNote.value)
    form.elements.newNote.value = '';
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
//#endregion