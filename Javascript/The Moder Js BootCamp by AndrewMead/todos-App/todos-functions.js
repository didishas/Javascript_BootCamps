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

const removeTodo = function(idKey){
    todos.splice(todos.findIndex(function(todo){
        return todo.id === idKey
    }), 1);
}

// Generate HTML Todo
const generateTodoDOM = function(todo) {
    const p = document.createElement('p');
    const label = document.createElement('label'); 
    const input = document.createElement('input');
    const icon = document.createElement('i');
    const nodeText = document.createTextNode(` ${todo.text}   `)
    p.classList.add('todo');
    p.appendChild(label);
    p.appendChild(icon);
    input.setAttribute("type", "checkbox");
    input.checked = todo.completed;
    label.appendChild(input);
    label.appendChild(nodeText);
    icon.classList.add("far", "fa-trash-alt");

    // Click Event Listener attached to icon => removes Todo
    icon.addEventListener('click', function(){
        removeTodo(todo.id);
        todoList.innerHTML = '';
        saveTodos(todos);
        renderTodos(todos,filters);
    })

    // Checked Event Listener attached to checkbox = > change complete states of todo
    input.addEventListener('change', function(e){
        console.log(e.target.checked);
        todo.completed = e.target.checked;
        saveTodos(todos);
        todoList.innerHTML = '';
        renderTodos(todos,filters);
    })

    return p;

    // return `<p class="todo"><label><input type="checkbox">  ${todo.text}</label>  <i class="far fa-trash-alt"></i></p>`;
    
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
        todoList.insertAdjacentElement('beforeend', generateTodoDOM(todo));
        
    });
}

// Creates a Todo and Pushes it on in todos Array
const createPushTodo = function(todos, newTodo) {
    const newItem = {
        id: uuidv4(), // -> v4 UUID
        text: newTodo.value,
        completed: false
    }
    todos.push(newItem);
}
//#endregion