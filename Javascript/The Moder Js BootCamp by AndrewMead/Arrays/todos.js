let todos = ['Walk in the park', 'Buy a pot for salt', 'Going to the River', 'Do the Milk', 'Pray and Read the Bible'];

console.log(`You have ${todos.length} todos`)
console.log('First item ->', `Todo: ${todos[0]}`)
console.log('Second last item ->', `Todo: ${todos[todos.length - 2]}`)

// Delete the third item
console.log(todos.splice(2, 1), 'is removed from the list')
// Add a new item onto the end
todos.push('Talk to Mouatassim');
console.log(todos)
// Remove the first item from the list
console.log(todos.shift(), 'is removed from the list');


