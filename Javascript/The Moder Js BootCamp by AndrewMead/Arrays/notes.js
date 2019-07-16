const notes = ['Note 1', 'Note 2', 'Note 3']

const removedNote = notes.pop();
console.log(`${removedNote} is removed`);

console.log(notes.length);
console.log(notes[notes.length -2]);

notes.push('My new Note');

console.log(notes.length)
console.log(notes[notes.length - 2])

console.log(notes.shift());

console.log(`I'm going to remove items in middle and add some ...`);

console.log(notes.splice(2, 1, 'new third Note', 'new last note'))

console.log(notes);