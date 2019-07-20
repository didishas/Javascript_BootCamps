console.log('Starting ...');

// My Datas
let todos = [];
// Fetch existing todo from LocalStorage
todos = getSavedTodos();

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

//Render todos base on filters, adjust uncompleted todos section
renderTodos(todos, filters);

//#region Event Listeners
// Add a new Todo
form.addEventListener('submit', function(e){
    e.preventDefault();
    createPushTodo(todos, newTodo);
    //Save Todos to localStorage
    saveTodos(todos);
    
    newTodo.value = '';
    todoList.innerHTML = '';
    renderTodos(todos, filters)
});

// Filter Todos and Set Filters
searchTodo.addEventListener('input', function(e){
    filters.searchText = e.target.value;
    todoList.innerHTML = '';
    renderTodos(todos, filters);
});

// CheckBoxes makes completed todos InVisible 
headerForm.elements.visibleTodos.addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    todoList.innerHTML = '';
    renderTodos(todos, filters);
})

//#endregion
