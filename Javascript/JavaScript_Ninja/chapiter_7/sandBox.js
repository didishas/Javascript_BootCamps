let form = document.querySelector('form');
let input = document.querySelector('#username');
let feedback = document.querySelector('.feedback');
const pattern = /^[a-zA-Z]{6,12}$/


form.addEventListener('submit', (e) => {
    e.preventDefault();  
    console.log(input.value)
    
    feedback.textContent = (pattern.test(input.value) ? `Username Ok` : `Username Failed`);
    form.username.value = '';
    form.username.style.outline = 'none';
});


// todo live feedback 
form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value)
    form.username.style.outline = ((pattern.test(input.value)) 
    ? 'solid 2px greenyellow' 
    : 'solid 2px crimson') ;
});
  