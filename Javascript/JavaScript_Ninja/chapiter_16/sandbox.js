// ! Cpmponents
const recipesList = document.querySelector('ul');
const form = document.querySelector('form')

// Private Helpers
const addRecipe =function (doc) {
    console.log(doc.data().create_at.toDate())
    recipesList.insertAdjacentHTML('afterbegin', `<li class="list-group-item list-group-item-action flex-column align-items-start" data-id= "${doc.id}">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1 col-md-8">${doc.data().title}</h5>
    <small col-md-4>${doc.data().create_at.toDate()}</small>
    </div>
    </li>`);
}
const deleteRecipe = function (change) {
    const li = document.querySelector(`[data-id=${change.doc.id}]`);
    li.remove();
}
                                                // Getting recipes from DataBase
                                                // db
                                                //     .collection("recipes")
                                                //     .get()
//     .then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//             console.log(doc.data());
//             addRecipe(doc);
//         });
//     })
//     .catch(function (error) {
//         console.log(error);
        
//     }) 
    



//! Adding recipe in Firestore

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(form.author.value);
    const authorName = form.author.value;
    const recipe = form.recipe.value;

    const now = new Date();
    const recipeData = {
        author: authorName,
        title: recipe,
        create_at: firebase.firestore.Timestamp.fromDate(now)
    };
    db
    .collection("recipes")
    .add(recipeData)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    });
    form.reset();
})

//! Delete from firebase
recipesList.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(e.target.parentNode.parentNode.getAttribute('data-id'));

    db.collection('recipes')
    .doc(e.target.parentNode.parentNode.getAttribute('data-id'))
    .delete();
});


//! Real Time update
db.collection('recipes').onSnapshot(snapshot => {
    
    let changes = snapshot.docChanges();
    console.log(changes);
    changes.forEach( change => {
        if (change.type === 'added') {
            console.log(change.doc.data());
            addRecipe(change.doc)
        } else if(change.type === 'removed'){
            deleteRecipe(change);
            // cafeList.removeChild(li);
        }
    })
});

