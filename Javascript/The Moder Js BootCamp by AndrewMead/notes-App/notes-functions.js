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

// Sort your notes by one or three ways
const sortNotes = function(notes, sortBy) {
    if (sortBy === 'byEdited') {
        console.log('byEdited')
        return notes.sort(function(a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            }else if (a.updatedAt < b.updatedAt) {
                return 1;
            }else {
                return 0;
            }
        })
    } else if(sortBy === 'byTitle'){
        console.log('byTitle')
        return notes.sort(function(a, b) {
            if (a.title > b.title) {
                return 1;
            }else if (a.title < b.title) {
                return -1;
            }else {
                return 0;
            }
        })
    }else {
        console.log('ByCreated')
        return notes.sort(function(a, b) {
            if (a.createdAt > b.createdAt) {
                return 1;
            }else if (a.createdAt < b.createdAt) {
                return -1;
            }else {
                return 0;
            }
        })
    }
}

const renderNotes = function(notes, filters) {
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter(note => {
        return (note.body.toLowerCase().includes(filters.searchText) || note.title.toLowerCase().includes(filters.searchText))
    });

    filteredNotes.forEach(note => display(note));
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

const generateLastEdited = function(timestamp){
    return `Last edited ${moment(timestamp).fromNow()}.`
}
//#endregion
