// :telephone_receiver:

//! fetch Api
const url = 'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos/';
fetch(url)
.then(response => {
    return response.json();
})
.then(data => {
    let container = document.querySelector('.container')
    container.textContent = '';
            data.forEach((cur,index) => {
                container.insertAdjacentHTML('afterbegin',`<h3>${cur.title}</h3>
                            <p>completed: ${cur.completed}</p>`)
            })
})