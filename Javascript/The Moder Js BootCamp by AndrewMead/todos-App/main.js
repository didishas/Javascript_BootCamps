console.log('Starting ...');

//My Datas
let todos = [{
    text:'Walk in the park',
    completed: false
}, {
    text:'Buy a pot for salt',
    completed: true
}, {
    text:'Going to the River',
    completed: false
}, {
    text:'Do the Milk',
    completed: true
}, {
    text:'Pray and Read the Bible',
    completed: false
}];

// Html Elements
const body = document.querySelector('body');
const sousTitre = document.querySelector('h3');
const todoList = document.querySelector('section.todos');
const newTodo = document.getElementById('new-todo-text');
const button = document.querySelector('button');
const searchTodo = document.querySelector('#search-todo-text');
const form = document.getElementById('todo-form');

//#region Global Functions
const renderTodos = function(todos) {
    todos.forEach(todo => {
        const html = `<p class="todo">${todo.text}</p>`;
        todoList.insertAdjacentHTML('beforeend', html);
        console.log(todo.text);
    });
}

// Count and Display Uncompleted todo
const todosLeft = function() {
    const numberOfUndos = todos.reduce(function(sumOfTodos, current){
        if(!current.completed) sumOfTodos++;
        return sumOfTodos;
    }, 0)
    
    console.log(numberOfUndos);
    
    const p = document.createElement('p');
    p.setAttribute('id', 'left-todos')
    p.textContent = `You have ${numberOfUndos} todos left`;
    sousTitre.insertAdjacentElement('afterend', p)
}
//#endregion

renderTodos(todos);
todosLeft();    

//#region Event Listeners

// Add a new Todo
button.addEventListener('click', function(e){
    e.preventDefault();
    console.log(newTodo.value);
    const newItem = {
        text: newTodo.value,
        completed: false
    }
    todos.push(newItem)
    newTodo.value = '';
    todoList.innerHTML = '';
    renderTodos(todos)
});

// Filter Todos
searchTodo.addEventListener('input', function(e){
    console.log(e.target.value);
    todoList.innerHTML = '';
    
    const searchedTodos = todos.filter(todo => {
        return (todo.text.toLocaleLowerCase().includes(e.target.value.toLowerCase()));
    })
    renderTodos(searchedTodos)
});
//#endregion
