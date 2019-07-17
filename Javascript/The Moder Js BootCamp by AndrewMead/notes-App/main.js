const noteList = document.querySelector('.note-list');

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
        <label for="titre">titre: ${note.title}</label>
        <p>Body: ${note.body}</p>
    </li>`
    noteList.insertAdjacentHTML('beforeend', html)
}
notes.forEach(note => display(note));