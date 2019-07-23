const didier = {
    myBDay : new Date('January 27 1976 16:32:00'),
    Timestamp() {return this.myBDay.getTime()}
}
const caty = {
    catyBDay : new Date('June 2 1990 11:00:00'),
    Timestamp() {return this.catyBDay.getTime()}
}

const now = {
    now : new Date(),
    Timestamp() {return this.now.getTime()}
}

const persons = [caty, now, didier];

console.log('Before');
console.log(persons);
persons.sort((a, b) => a.Timestamp() < b.Timestamp());
console.log('After');
console.log(persons);




// Moment Js Script
const bDay = moment('1976-01-27 16:32:00');
console.log(bDay.toString());
console.log(bDay.format('MMM DD, YYYY'))