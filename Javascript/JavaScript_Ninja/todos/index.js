const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
let todos = [];

const generateTemplate = (todo) => {
    
    const html = `  <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>${todo}</span>
                        <i class="far fa-trash-alt delete"></i>
                    </li>`
    list.insertAdjacentHTML('beforeend', html)
}

const deletingElement = (todo) => {
    todo.remove();
}

addForm.addEventListener('submit', (e) => {
    e.preventDefault ();

    // 👎 console.log(document.querySelector('input[name=add]').value) 
    const todo = addForm.add.value.trim();
    // console.log(todo);
    if(todo.length){
        generateTemplate(todo);
        addForm.reset()
    }

})

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-trash-alt')){
        e.target.parentNode.remove();
    }    
}) 