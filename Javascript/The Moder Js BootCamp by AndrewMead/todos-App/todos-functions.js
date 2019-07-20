//#region Global Functions

//Fetch existing todo from LocalStorage
const getSavedTodos = function() {
    const todosJson = localStorage.getItem('todos');
    return (todosJson !== null) ? JSON.parse(todosJson) : [];
}

//Save Todos to localStorage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}


const getCheckBoxes = function() {
    return document.querySelectorAll('.completed');
}

const listenCheckBoxes = function(todos) {
    
    getCheckBoxes().forEach( checkbox => {
        checkbox.addEventListener('change', function(e){
        if(checkbox.checked) {
            const checkedTodo = e.target.parentNode.textContent;
            console.log(todos.findIndex(todo => todo.text === checkedTodo.trim()))
            const checkedTodoIndex = todos.findIndex(todo => todo.text === checkedTodo.trim());
            todos[checkedTodoIndex].completed = true;
            saveTodos(todos)
        } else{
            const checkedTodo = e.target.parentNode.textContent;
            console.log(todos.findIndex(todo => todo.text === checkedTodo.trim()))
            const checkedTodoIndex = todos.findIndex(todo => todo.text === checkedTodo.trim());
            todos[checkedTodoIndex].completed = false;
            saveTodos(todos)
        }
    })
})
}

// Count and Display Uncompleted todo
const generateSummaryDOM = function(uncompletedTodo) {
    const numberOfUndos = todos.reduce(function(sumOfTodos, current){
        if(!current.completed) sumOfTodos++;
        
        return sumOfTodos;
    }, 0)
    
    uncompletedTodo.textContent = '';
    const p = document.createElement('p');
    p.setAttribute('id', 'left-todos')
    p.textContent = `You have ${numberOfUndos} todos left`;
    uncompletedTodo.insertAdjacentElement('afterbegin', p)
}

// Generate HTML Todo
const generateTodoDOM = function(todo) {
    if (todo.completed) {
        return `<p class="todo"><label><input type="checkbox" class="completed" checked>  ${todo.text}</label>  <i class="far fa-trash-alt"></i></p>`;
    } else {
        return `<p class="todo"><label><input type="checkbox" class="completed">  ${todo.text}</label>  <i class="far fa-trash-alt"></i></p>`;
    }
}

// Render application todos based on filters
const renderTodos = function(todos, filters) {
    
    // Count and Display Uncompleted todo
        generateSummaryDOM(uncompletedTodo);    
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
            todoList.insertAdjacentHTML('beforeend', generateTodoDOM(todo));
        });

        listenCheckBoxes(todos);
}

// Creates a Todo and Pushes it on in todos Array
const createPushTodo = function(todos, newTodo) {
    const newItem = {
        text: newTodo.value,
        completed: false
    }
    todos.push(newItem);
}
//#endregion
