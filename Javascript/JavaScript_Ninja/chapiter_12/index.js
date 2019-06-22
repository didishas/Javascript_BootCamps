console.log('Starting')

const getTodos = () => {
    const request = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/todos/';

    let container = document.querySelector('.container')



    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);

        if(request.readyState === 4 && request.status === 200){
            console.log(request.responseText)
            const data = request.responseText;
            const info = JSON.parse(data);

            container.textContent = '';
            info.forEach((cur,index) => {
                container.insertAdjacentHTML('afterbegin',`<h3>${cur.title}</h3>
                            <p>completed: ${cur.completed}</p>`)
            })
        }
    })

    request.open('GET', url);
    request.send();
} 

getTodos()