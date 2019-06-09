// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

var AdminController = (function(){

    class Building {
        constructor (name, buildYear) {
            this.name = name;
            this.buildYear = buildYear;
        }
    }

    class Park extends Building {
        constructor(name, buildYear, numberTrees, parkArea) {
            super(name, buildYear);
            this.numberTrees = numberTrees;
            this.parkArea = parkArea;
        }

        CalculateDensity() {
            return this.numberTrees / this.parkArea;
        }

        static AverageAgeOfParks (...parks) {
            var sum = 0;
            parks.forEach( park => {
                sum += 2016 - park.buildYear;                
            })
            return sum / (parks.length)
        }

        static displayDensities(...parks) {
            parks.forEach( park => console.log(`${park.name} has tree density of ${park.CalculateDensity()} per square km`))
        }
    }


    let park1 = new Park('Oak Park', 1976, 4745, 2)
    let park2 = new Park('National Park', 1986, 3663, 3)
    let park3 = new Park('Green Park', 1990, 2150, 2)

    let parks = [park1, park2, park3]

    let averageAgeData = Park.AverageAgeOfParks(park1, park2, park3) 
    let averageAgeString = `Our 3 parks have an average age of ${averageAgeData} years...`
    Park.displayDensities(...parks);

    return {
        init: function(){
            console.log('Administration App')
        },
        averageAge: averageAgeString,
        parks: parks
    }
})();

var controller = (function(admCtrl){
    admCtrl.init();
    // console.log(admCtrl.averageAge);
    // admCtrl.Park.displayDensities(admCtrl.parks);
    console.log(...(admCtrl.parks))
})(AdminController);