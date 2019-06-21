const btn = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const closeBtn = document.querySelector('.popup-close')


 btn.addEventListener('click', (e) => {
     popup.style.display = 'block'
 })

 closeBtn.addEventListener('click', (e) => {
    popup.style.display = 'none'
})

 popup.addEventListener('click', (e) => {
    popup.style.display = 'none'
})

