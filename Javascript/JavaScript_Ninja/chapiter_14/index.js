localStorage.setItem('name', 'didier')
localStorage.setItem('age', 42)

let fullname = localStorage.getItem('name');

console.log(fullname, 'from localStorage');

localStorage.removeItem('age')

console.log(' Passing a Object on localStorage')

const todos = [
    {text: 'buy milk', author: 'Maman Cathy'},
    {text: 'Washing Kids', author: 'Maman Cathy'},
    {text: 'Studying', author: 'Didier'}
]

const todosStringify = JSON.stringify(todos)

localStorage.setItem('todos', todosStringify);

console.log(localStorage)

console.log('Destructuring')

const a = [45, 46, 58.58]
const b = ['didier', 'patrick', 'louise']

let personalInfo = {a, b};

console.log(personalInfo)
console.log('hey');

localStorage.clear();

