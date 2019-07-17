// Convert Array to array of Objects -> text, completed properties
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

// Create function to remove a todo by text value

const deleteTodo = function(todos, todoText){
    const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoText.toLowerCase();
    })
    console.log(todos[index], 'removed')
    if(index > -1) todos.splice(index, 1);
}

deleteTodo(todos, 'Buy a pot for salt');
console.log(todos)

// Challenge just the todos with completed true

const completedTodos = function(todos){
    return todos.filter(function(todo) {
        return todo.completed;
    })
}

console.log(completedTodos(todos))
const sorted = todos.sort(function (a,b) {
    // if(a.completed < b.completed){
    //     return -1;
    // }else if(a.completed > b.completed) {
    //     return 1;
    // }else {
    //     return 0;
    // }
    return b.completed - a.completed
})
console.log(sorted)

