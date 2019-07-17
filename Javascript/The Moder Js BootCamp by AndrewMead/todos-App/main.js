
console.log('Starting ...');

const paras = document.querySelectorAll('p');
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
