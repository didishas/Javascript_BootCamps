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
const uncompletedTodo = document.querySelector('.uncompleted-todo');
const todoList = document.querySelector('section.todos');
const newTodo = document.getElementById('new-todo-text');
const button = document.querySelector('button');
const searchTodo = document.querySelector('#search-todo-text');
const form = document.getElementById('todo-form');
const headerForm = document.querySelector('form.container')


const filters = {
    searchText: '',
    hideCompleted: false
}

//#region Global Functions

// Count and Display Uncompleted todo
const todosLeft = function() {
    const numberOfUndos = todos.reduce(function(sumOfTodos, current){
        if(!current.completed) sumOfTodos++;
        return sumOfTodos;
    }, 0)
    
    console.log(numberOfUndos);

    uncompletedTodo.textContent = '';
    const p = document.createElement('p');
    p.setAttribute('id', 'left-todos')
    p.textContent = `You have ${numberOfUndos} todos left`;
    uncompletedTodo.insertAdjacentElement('afterbegin', p)
}

//Render todos base on filters, adjust uncompleted todos section
const renderTodos = function(todos, filters) {
    
    todosLeft();    
    let searchedTodos = todos.filter(todo => {
        return (todo.text.toLocaleLowerCase().includes(filters.searchText.toLowerCase()));
    })
    
    searchedTodos = searchedTodos.filter(todo => {
        if(filters.hideCompleted) {
            return !todo.completed;
        }else {
            return true;
        }
    })

    searchedTodos.forEach(todo => {
        const html = `<p class="todo">${todo.text}</p>`;
        todoList.insertAdjacentHTML('beforeend', html);
        console.log(todo.text);
    });


}
//#endregion

renderTodos(todos, filters);

//#region Event Listeners

// Add a new Todo
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(newTodo.value);
    const newItem = {
        text: newTodo.value,
        completed: false
    }
    todos.push(newItem)
    newTodo.value = '';
    todoList.innerHTML = '';
    renderTodos(todos, filters)
});

// Filter Todos and Set Filters
searchTodo.addEventListener('input', function(e){
    console.log(e.target.value);
    filters.searchText = e.target.value;
    todoList.innerHTML = '';
    
    renderTodos(todos, filters);
});
//#endregion

headerForm.elements.visibleTodos.addEventListener('change', (e) => {
    // console.log(e.target.checked)
    filters.hideCompleted = e.target.checked;
    todoList.innerHTML = '';
    renderTodos(todos, filters);
})
