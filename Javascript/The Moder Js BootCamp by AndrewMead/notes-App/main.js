const noteList = document.querySelector('.note-list');
const createBtn = document.querySelector('#create-btn');
const deleteBtn = document.querySelector('#delete-btn');
const searchText = document.getElementById('search-text');

const notes = [{
    title: 'My next trip',
    body: 'I would like to swim'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

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

renderNotes(notes);

createBtn.addEventListener('click', function(e){
    display({
        title: 'New Note',
        body: 'New instructions'
    })
    console.log('A note is created.')
})

// deleteBtn.addEventListener('click', function(e){
//     const docs = document.querySelectorAll('li')
//     docs.forEach(doc => removeNote(doc))
//     console.log('All notes are removed.')
// })

searchText.addEventListener('input', function(e){
    console.log(e.target.value);
    noteList.innerHTML = '';
    const filteredNotes = notes.filter(note => {
        return (note.body.toLowerCase().includes(e.target.value) || note.title.toLowerCase().includes(e.target.value))
    });
    
    renderNotes(filteredNotes);
})