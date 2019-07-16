// Convert Array to array of Objects -> text, completed properties
let todos = [{
    text:'Walk in the park',
    completed: false
    }, {
        text:'Buy a pot for salt',
        completed:false
    }, {
        text:'Going to the River',
        completed:false
    }, {
        text:'Do the Milk',
        completed:false
    }, {
        text:'Pray and Read the Bible',
        completed:false
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
