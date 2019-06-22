// :stopwatch:

//! Async && Await
const url = 'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos/';


const getTodos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

getTodos()
    .then(data => {
        
        let container = document.querySelector('.container')

        container.textContent = '';
        data.forEach((cur) => {
        container.insertAdjacentHTML('afterbegin',`<h3>${cur.title}</h3>
                            <p>completed: ${cur.completed}</p>`)
        })
    })
    .catch(err => console.log(err));