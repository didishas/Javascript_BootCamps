console.log('Starting')

const getTodos = () => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        const url = 'https://jsonplaceholder.typicode.com/todos/';
        
        
        
        
        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            
            if(request.readyState === 4 && request.status === 200){
            const data = request.responseText;
            resolve(JSON.parse(data));
            
        } else if(request.readyState === 4){
            reject('Can not fetch')
        }
    })
    
    request.open('GET', url);
    request.send();
})
} 

getTodos()
.then(data => {
    let container = document.querySelector('.container')
    
    container.textContent = '';
    data.forEach((cur) => {
        container.insertAdjacentHTML('afterbegin',`<h3>${cur.title}</h3>
                    <p>completed: ${cur.completed}</p>`)
    })
})
.catch(err => console.log(err));