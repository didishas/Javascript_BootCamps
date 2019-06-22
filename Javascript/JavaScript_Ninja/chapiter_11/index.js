const clock = document.querySelector('.clock')




setTime();

function setTime() {
    const date = new Date();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hours);
    let time = `<span>${hours}</span>
     : <span>${minutes}</span>
     : <span>${seconds}</span>`
    clock.innerHTML = time;
}


setInterval(setTime, 1000)
