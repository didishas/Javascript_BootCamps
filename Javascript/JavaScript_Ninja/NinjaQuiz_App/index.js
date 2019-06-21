console.log('starting')

const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const span = document.querySelector('.result span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];  

    //* check Answers 

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) score += 25;
    })

    console.log(`${score} %`)

    //* display the result section
    scrollTo(0, 0)
    result.classList.remove('d-none');
    span.textContent = `${score} %`;
})