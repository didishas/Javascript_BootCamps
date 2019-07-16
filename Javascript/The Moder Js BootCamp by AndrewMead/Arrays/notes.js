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

// indexOf method
console.log(notes.indexOf({})); // Doesn't work with Array of Object

// findIndex method
const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
    return [notes[index], `index: ${index}`];
}

console.log('With the method findIndex');
console.log(findNote(notes, 'Habbits to work on'));

// find Method

const findNote2 = function(notes, noteTitle){
    return notes.find(function(note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
}
console.log('With the method find');
console.log(findNote2(notes, 'Habbits to work on'));
