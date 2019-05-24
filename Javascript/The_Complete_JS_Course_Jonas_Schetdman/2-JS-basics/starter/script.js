//! Coding Challenge 1
console.log('Coding Challenge 1');
/*
?Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
?1. Store Mark's and John's mass and height in variables
?2. Calculate both their BMIs
?3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
?4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
?GOOD LUCK 😀
*/
const persons = [
    {
        name: 'Mark',
        mass: 78, // kg
        height: 1.69 // meters
    },
    {
        name: 'John',
        mass: 92, // kg
        height: 1.95 // meters
    }
]

isHigher(persons)

//* My Helpers

function Calculate_BMI(mass, height) {
    return mass / Math.sqrt(height);
}

function isHigher(persons) {
    const person1BMI = Calculate_BMI(persons[0].mass, persons[0].height);
    const person2BMI = Calculate_BMI(persons[1].mass, persons[1].height);
    const isHigherBoolean = person1BMI > person2BMI;
    console.log(`Is ${persons[0].name}'s BMI higher than ${persons[1].name}'s ? ${isHigherBoolean} `)
}

/*****************************
* !CODING CHALLENGE 2
*/
console.log('Coding Challenge 2');

/*
? John and Mike both play basketball in different teams. 
* In the latest 3 games, John's team scored 89, 120 and 103 points, 
* while Mike's team scored 116, 94 and 123 points.
? 1. Calculate the average score for each team
? 2. Decide which teams wins in average (highest average score), and print the winner to the console. 
todo Also include the average score in the output.
? 3. Then change the scores to show different winners. 
Todo Don't forget to take into account there might be a draw (the same average score)
? 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
todo Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
? 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
? GOOD LUCK 😀
*/

John = {
    name: 'john',
    scores: [89, 120, 103]
}

Mike = {
    name: 'mike',
    scores: [116, 94, 123]
}

Mary = {
    name: 'mary',
    scores: [97, 134, 105]
}

function CalculateAvg(scores){
    let sum = 0;
    scores.forEach(score => {
        sum += score;
    });
    return sum / scores.length;
    
}

switch (true) {
    case CalculateAvg(John.scores) > CalculateAvg(Mike.scores):
        displayWinner(John);
        break;
    case CalculateAvg(John.scores) < CalculateAvg(Mike.scores):
        displayWinner(Mike)
        break;
    default:
        console.log('It is a draw');        
        break;
}

console.log('EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.')
Bythree(John, Mike, Mary);

//* My Helpers for coding 2
function Bythree(pers1, pers2, pers3){
    const avg1 = CalculateAvg(pers1.scores)
    const avg2 = CalculateAvg(pers2.scores)
    const avg3 = CalculateAvg(pers3.scores)
    if (avg1 > avg2) {
        if (av1 > avg3) {
            displayWinner(pers1)            
        } else {
            displayWinner(pers3)
        }        
    } else {
        if (avg2 > avg3) {
            displayWinner(pers2)
        } else {
            displayWinner(pers3)
        }
    }
}

// * @param person 
function displayWinner(person) {
    console.log(`${person.name} wins by an average of ${CalculateAvg(person.scores)}`);
}

/*****************************
* CODING CHALLENGE 3
*/
console.log('Coding Challenge 3');
/*
? John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
? To tip the waiter a fair amount, John created a simple tip calculator (as a function).
? He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
? and 10% if the bill is more than $200.
? In the end, John would like to have 2 arrays:
? 1) Containing all three tips (one for each bill)
? 2) Containing all three final paid amounts (bill + tip).
? (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
? GOOD LUCK 😀
*/

var JohnTips = {
    name: 'John',
    bills: [124, 48, 268],
    tips: [],
    finalAmount: [],
    tip: function(){        
        for (let index = 0; index < this.bills.length; index++) {
            this.tips.push(this.bills[index] * this.chooseTip(this.bills[index]));
            this.finalAmount.push(this.bills[index] *(1 + this.chooseTip(this.bills[index])))            
        }
    },
    chooseTip: function(bill){
            switch (true) {
                case bill < 50:
                    return .2;
                case bill < 200:
                    return .15;            
                default:
                    return .1;
            }
        }
    }
JohnTips.tip()
console.log(JohnTips.tips)
console.log(JohnTips.finalAmount)


/*****************************
* CODING CHALLENGE 4
*/
console.log('Coding Challenge 4');
/*
? Let's remember the first coding challenge where Mark and John compared their BMIs. 
* Let's now implement the same functionality with objects and methods.
? 1. For each of them, create an object with properties for their full name, mass, and height
? 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
? 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. 
* Don't forget they might have the same BMI.
? Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
? GOOD LUCK 😀
*/

const persons4 = [
    {
        name: 'Mark',
        mass: 78, // kg
        height: 1.69, // meters
        Calculate_BMI: function () {
            return this.mass / Math.sqrt(this.height);
        }

    },
    {  
        name: 'John',
        mass: 92, // kg
        height: 1.95, // meters
        Calculate_BMI: function () {
            return this.mass / Math.sqrt(this.height);
        }
    }
]

isHigher4(persons4)

//* My Helpers

function isHigher4(persons) {
            const person1BMI = persons[0].Calculate_BMI();
            const person2BMI = persons[1].Calculate_BMI();
            const isHigherBoolean = person1BMI > person2BMI;
            console.log(`Is ${persons[0].name}'s BMI higher than ${persons[1].name}'s ? ${isHigherBoolean} `)
}

/*****************************
*! CODING CHALLENGE 5
*/
console.log('Coding Challenge 5');
/*
? Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
? This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
*  John likes to tip 20% of the bill when the bill is less than $50, 
* 15% when the bill is between $50 and $200, 
* and 10% if the bill is more than $200.
? Implement a tip calculator using objects and loops:
todo 1. Create an object with an array for the bill values
todo 2. Add a method to calculate the tip
todo 3. This method should include a loop to iterate over all the paid bills and do the tip calculations
todo 4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip).
* HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

? EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 
? The bills were $77, $375, $110, and $45.
* Mark likes to tip 20% of the bill when the bill is less than $100, 
* 10% when the bill is between $100 and $300, 
* and 25% if the bill is more than $300 (different than John).
todo 5. Implement the same functionality as before, this time using Mark's tipping rules
todo 6. Create a function (not a method) to calculate the average of a given array of tips.
*  HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
* After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
todo 7. Calculate the average tip for each family
todo 8. Log to the console which family paid the highest tips base on average
? GOOD LUCK 😀
*/


// const averageTip = function(person) {
//     let sum = 0;
//     person.tips.forEach( tip => sum += tip);
//     return sum / person.length;
// }


var JohnnTips = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalAmount: [],
    tip: function(){        
        for (let index = 0; index < this.bills.length; index++) {
            this.tips.push(this.bills[index] * this.chooseTip(this.bills[index]));
            this.finalAmount.push(this.bills[index] * (1 + this.chooseTip(this.bills[index])))            
        }
    },
    chooseTip: function(bill){
            switch (true) {
                case bill < 50:
                    return .2;
                case bill < 200:
                    return .15;            
                default:
                    return .1;
            }
        },
        averageTip: function() {
            let sum = 0;
            this.tips.forEach( tip => sum += tip);
            return sum / this.tips.length;
        },
        avgTip: 0
    }


var MarkTips = {
    name: 'Mark',
    bills: [77, 375, 110, 45],
    tips: [],
    finalAmount: [],
    tip: function(){        
        for (let index = 0; index < this.bills.length; index++) {
            this.tips.push(this.bills[index] * this.chooseTip(this.bills[index]));
            this.finalAmount.push(this.bills[index] * (1 + this.chooseTip(this.bills[index])))            
        }
    },
    chooseTip: function(bill){
            switch (true) {
                case bill < 50:
                    return .2;
                case bill < 200:
                    return .15;            
                default:
                    return .1;
            }
        },
        averageTip: function() {
            let sum = 0;
            this.tips.forEach( tip => sum += tip);
            return sum / this.tips.length;
        },
        avgTip: 0
    }

    JohnnTips.tip();
    MarkTips.tip();

    JohnnTips.avgTip = JohnnTips.averageTip()
    MarkTips.avgTip = MarkTips.averageTip()

    // todo displaying Tips of all families
    console.log('Tips of Marks and Johns families');
    
    console.log(JohnnTips.tips);
    console.log(MarkTips.tips);
    
    console.log('Final Amount of Marks and Johns families');
    
    console.log(JohnnTips.finalAmount);
    console.log(MarkTips.finalAmount);

    JohnnTips.avgTip > MarkTips.avgTip ? console.log(`${JohnnTips.name}'s has the highest tips base on average $${JohnnTips.avgTip} `)
                                        : console.log(`${MarkTips.name}'s has the highest tips base on average $${MarkTips.avgTip} `);
    
    