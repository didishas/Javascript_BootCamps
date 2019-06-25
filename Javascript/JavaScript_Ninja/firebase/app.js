
// ! components
const cafeList = document.getElementById('cafe-list');

// Helper

const renderCafe = function(doc) {
    const html =    `<li data-id=${doc.id}>
                        <span>${doc.data().name}</span> 
                        <span>${doc.data().city}</span>
                    </li>`;

    cafeList.insertAdjacentHTML('afterbegin', html)
}

db.collection('cafes').get()
.then(snapshot => snapshot.docs.forEach(doc => {
    console.log(doc.data());
    renderCafe(doc);
}))