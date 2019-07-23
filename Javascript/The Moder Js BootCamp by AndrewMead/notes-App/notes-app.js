console.log('Starting ...');

// checking if localStorage is empty
let notes = getSavedNotes();
const filters = {
    searchText: '',
    sortBy: ''
}

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
renderNotes(notes, filters);

//#region Event Listeners
htmlElements.createBtn.addEventListener('click', function(e){
    e.preventDefault();
    const hash = uuidv4();
    const timestamp = moment().valueOf();
    notes.push({
        id: hash, // -> v4 UUID
        title: `${htmlElements.form.elements.newTitle.value}` || 'unnamed note',
        body: `${htmlElements.form.elements.newNote.value}`,
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes);
    htmlElements.noteList.innerHTML = '';
    htmlElements.form.elements.newNote.value = '';
    htmlElements.form.elements.newTitle.value = '' ;
    renderNotes(notes, filters);
    location.hash = hash;
    location.assign(`./edit.html#${hash}`)
})

htmlElements.dropDownList.addEventListener('change', (e) => {
    htmlElements.noteList.innerHTML = '';
    filters.sortBy = e.target.value;
    // console.log(e.target.value)
    renderNotes(notes,filters)
});

htmlElements.searchText.addEventListener('input', function(e){
    htmlElements.noteList.innerHTML = '';
    filters.searchText = e.target.value;
    
    renderNotes(notes, filters);
})

window.addEventListener('storage', function(e){
    if(e.key ===  'notes') {
        // Parse the new data and update notes
        notes = JSON.parse(e.newValue);
        // Rerender the notes
        htmlElements.noteList.innerHTML = '';
        renderNotes(notes, filters);
    }
})
//#endregion


