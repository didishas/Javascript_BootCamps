// :telephone_receiver:

//! fetch Api
const url = 'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos/';
fetch(url)
.then(response => {
    return response.json();
})
.then(data => console.log(data))