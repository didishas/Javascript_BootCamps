
console.log('Starting ...');


const paras = document.querySelectorAll('p');
const body = document.querySelector('body');
const sousTitre = document.querySelector('h3');
const todoList = document.querySelector('section.todos');
const newTodo = document.getElementById('new-todo-text');
const button = document.querySelector('button');
const searchTodo = document.querySelector('#search-todo-text')

console.log(paras);

paras.forEach(para => console.log(para.textContent));

const paragraphs = [...paras]

const filteredTodos = function(paragraphs, word) {
    return paragraphs.filter(function(para) {
        return para.textContent.toLowerCase().includes(word.toLowerCase());
    })
}
// console.log(filteredTodos(paragraphs, 'the'));

const removeTodos = function(paragraphs, word){
    const tags = filteredTodos(paragraphs, word);
    tags.forEach(tag => tag.remove());
}

// removeTodos(paragraphs, 'the')

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

const renderTodos = function(todos) {
    todos.forEach(todo => {
        const html = `<p class="todo">${todo.text}</p>`;
        todoList.insertAdjacentHTML('beforeend', html);
        console.log(todo.text);
    });
}

renderTodos(todos);

const todosLeft = function() {
    const numberOfUndos = todos.reduce(function(sumOfTodos, current){
        if(!current.completed) sumOfTodos++;
        return sumOfTodos;
    }, 0)
    
    console.log(numberOfUndos);
    
    const p = document.createElement('p');
    p.textContent = `You have ${numberOfUndos} todos left`;
    sousTitre.insertAdjacentElement('afterend', p)
}

todosLeft();    

button.addEventListener('click', function(e){
    console.log(newTodo.value);
    newTodo.value = '';
})

searchTodo.addEventListener('input', function(e){
    console.log(e.target.value);
    todoList.innerHTML = '';
    
    const searchedTodos = todos.filter(todo => {
        return (todo.text.toLocaleLowerCase().includes(e.target.value.toLowerCase()));
    })
    renderTodos(searchedTodos)
})
