console.log('Starting ...');

// checking if localStorage is empty
const notes = getSavedNotes();

//Html Elements
const htmlElements = {
    noteList : document.querySelector('.note-list'),
    createBtn : document.querySelector('#create-btn'),
    dropDownList : document.querySelector('select#sorting'),
    searchText : document.getElementById('search-text'),    
    form : document.getElementById('note-form'),
    // notes: [],
    // refreshNotes: function() {
    //     this.notes = document.querySelectorAll('li');
    // } 
}

// render existing notes in the localStorage
renderNotes(notes);

//#region Event Listeners
htmlElements.createBtn.addEventListener('click', function(e){
    e.preventDefault();
    const hash = uuidv4();
    notes.push({
        id: hash, // -> v4 UUID
        title: `${htmlElements.form.elements.newTitle.value}` || 'unnamed note',
        body: `${htmlElements.form.elements.newNote.value}`
    })
    localStorage.setItem('notes', JSON.stringify(notes));
    htmlElements.noteList.innerHTML = '';
    htmlElements.form.elements.newNote.value = '';
    htmlElements.form.elements.newTitle.value = '' ;
    renderNotes(notes);
    location.hash = hash;
    location.assign(`./edit.html#${hash}`)
})

htmlElements.dropDownList.addEventListener('change', (e) => console.log(e.target.value));

htmlElements.searchText.addEventListener('input', function(e){
    htmlElements.noteList.innerHTML = '';
    const filteredNotes = notes.filter(note => {
        return (note.body.toLowerCase().includes(e.target.value) || note.title.toLowerCase().includes(e.target.value))
    });
    renderNotes(filteredNotes);
})

//#endregion


