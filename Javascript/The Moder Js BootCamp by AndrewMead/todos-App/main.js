
console.log('Starting ...');


const paras = document.querySelectorAll('p');
const body = document.querySelector('body');
console.log(paras);

paras.forEach(para => console.log(para.textContent));

const paragraphs = [...paras]

const filteredTodos = function(paragraphs, word) {
    return paragraphs.filter(function(para) {
        return para.textContent.toLowerCase().includes(word.toLowerCase());
    })
}
console.log(filteredTodos(paragraphs, 'the'));

const removeTodos = function(paragraphs, word){
    const tags = filteredTodos(paragraphs, word);
    tags.forEach(tag => tag.remove());
}

removeTodos(paragraphs, 'the')

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

    todos.forEach(todo => {
        const html = `<p>${todo.text}</p>`
        body.insertAdjacentHTML('beforeend', html);
        console.log(todo.text)
})
