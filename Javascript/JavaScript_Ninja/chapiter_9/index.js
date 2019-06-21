const scores = [10, 30, 15, 25, 50, 40, 5, 45, 65 , 89 , 12 , 25 , 14 , 25 , 85 , 63 , 45 ];
console.log('Filtering')
const over30 = scores.filter(score =>{
    if(score >= 29){ 
        console.log(score);
        return score;
    }
    
})

console.log(over30)
console.log('Reducing')

const successfulScore = scores.reduce((acc, cur) => {
    if(cur >= 50) ++acc;
    return acc;
}, 0)

console.log(successfulScore)


console.log('finding')

console.log(scores.find((score, index) => score > 70))