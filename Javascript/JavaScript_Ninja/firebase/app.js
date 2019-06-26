
// ! components
const form = document.getElementById('add-cafe-form');
const cafeList = document.getElementById('cafe-list');

// Helper

const renderCafe = function(doc) {
    const html =    `<li data-id=${doc.id}>
                        <span>${doc.data().name}</span> 
                        <span>${doc.data().city}</span>
                        <div id="cross">x</div>
                    </li>`;

    cafeList.insertAdjacentHTML('afterbegin', html)

    
}

//! Getting NO-REAL Time 

// db.collection('cafes').where('city' , '>', "S").get()
// .then(snapshot => snapshot.docs.forEach(doc => {
//     console.log(doc.data());
//     renderCafe(doc);
// }))

//! Real-time Datas === REal time listener

db.collection('cafes').orderBy('city').onSnapshot( snapshot => {
    let changes = snapshot.docChanges();
    console.log(changes);
    changes.forEach( change => {
        if (change.type === 'added') {
            console.log(change.doc.data());
            renderCafe(change.doc)
        } else if(change.type === 'removed'){
            const li = document.querySelector(`[data-id=${change.doc.id}]`)
            li.remove();
            // cafeList.removeChild(li);
        }
    })
})


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log(name, city)

    db.collection('cafes').add({
        name: form.name.value,
        city: form.city.value
    })
    form.reset();
})

cafeList.addEventListener('click', (e) => {
    if(e.target.id === "cross") {
    console.log(e.target.id);

    console.log(e.target.parentNode.getAttribute('data-id'))

    db.collection('cafes').doc( e.target.parentNode.getAttribute('data-id')).delete();
    }
})