
//* DATA MODULE -- BUDGET CONTROLLER
// todo Add the new item  to our data structure 
// todo Calculate the budget 
var budgetController = (function(){
    

    //? function construction for Exp and Inc

    var Expense = function (id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }
    var Income = function (id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    // helper to calculate Total of inc and exp
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function (element) {
        sum += element.value;
        })
        data.totals[type] = sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
        // allExpenses: [],
        // allIncomes: [],
        // totalExpenses: 0
    }

    // !
    return {
        addItem: function(type, des, val) {
            var newItems, ID;

            //* Create a new id
            ID = (data.allItems[type].length <= 0 ? 0 
                : data.allItems[type][data.allItems[type].length - 1].id + 1);

            //* Create a new item based on inc or exp
            newItems = (type === 'exp' ? new Expense(ID, des, val) : new Income(ID, des, val));

            //* Push the new item into the data Structure
            data.allItems[type].push(newItems);

            //* return the new item
            return newItems; 
        },
        deleteItem: function(type, id) {
            var ids, id, index;
            //* Creating an array of ids
            ids = data.allItems[type].map(function(current){
                return current.id;
            }) // this is an array of ids

            index = ids.indexOf(id); //* find the searched id
            
            if(index !== -1){
                data.allItems[type].splice(index,1); //* try to delete the element if found
            }
        },
        calculateBudget: function() {

            // Calculate total incomes and expenses
            calculateTotal('inc');
            calculateTotal('exp');
            // Calculate the budget: incomes - expenses
            data.budget = data.totals.inc - data.totals.exp;
            // Calculate the percentage of income that we spent
            data.percentage = (data.totals.inc > 0 ? Math.round((data.totals.exp / data.totals.inc) * 100) : -1)  ;
        },
        getBudget: function () {
            return {
                budget: data.budget,
                percentage: data.percentage,
                totalIncome: data.totals.inc,
                totalExpenses: data.totals.exp
            };
        },
        calculatePercentage: function(){
            data.allItems.exp.forEach(function(current){
                current.calcPercentage(data.totals.inc);
            })
        },
        getPercentages: function() {
            var allPerc;
            allPerc = data.allItems.exp.map(function(current){
                return current.getPercentage();
            })
            return allPerc;
        },
        testing: function() {
            console.log(data);            
        }
    }
    
})();

//* UI MODULE -- UI CONTROLLER


var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

     // homemade forEach
     var nodeListForeach = function(list, callback){
        for (let index = 0; index < list.length; index++) {
            callback(list[index], index);                    
        }
    };

    //? format of currencies Number decimales thousands
    var formatNumber = function(number, type) {
        var numSplit, int , dec, sign;
        number = Math.abs(number).toFixed(2);

        numSplit = number.split('.');
        int = numSplit[0]
        dec = numSplit[1]
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3) 
        }
        return (type === 'exp' ? '-': '+') + ' ' + int  + '.' + dec;
    };

    return {
        // ? takes info from the DOM
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //? Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },
        // ? Adding New Item in the UI
        addListItem: function(obj, type) {
            var html, newHtml, element;
                
                // todo Create Html String with a placeholder text
                //! html template for Incomes and Expenses
                if(type === 'inc'){
                    element = DOMstrings.incomeContainer;
                    html = '<div class="item clearfix" id="inc-%id%">'
                            +'<div class="item__description">%description%</div>'
                            +'<div class="right clearfix">'
                                +'<div class="item__value">%value%</div>'
                                +'<div class="item__delete">'
                                    +'<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                                +'</div>'
                            +'</div>'
                        +'</div>';
                    }else if(type === 'exp'){
                        element = DOMstrings.expensesContainer;
                        html = '<div class="item clearfix" id="exp-%id%">'
                                +'<div class="item__description">%description%</div>'
                                +'<div class="right clearfix">'
                                    +'<div class="item__value">%value%</div>'
                                    +'<div class="item__percentage">%percentage%</div>'
                                    +'<div class="item__delete">'
                                        +'<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                                    +'</div>'
                                +'</div>'
                            +'</div>';
                }
                // todo Replace the placeholder with  some actual data
                newHtml = html.replace('%id%', obj.id);
                newHtml = newHtml.replace('%description%', obj.description);
                newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

                // todo Insert the Html into the DOM
                document.querySelector(element).insertAdjacentHTML('beforebegin', newHtml);
            
        },
        //? Deleting the item from the list
        deleteListItem: function(selectorId) {
            document.getElementById(selectorId).remove() //Issues Data still in the data structure
        },
        //? Clearing the Fields
        clearFields: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields)
            fieldsArr.forEach(element => {
                element.value = '';
            });
            document.querySelector(DOMstrings.inputDescription).focus(); //! same as fieldsArr[0].focus()
        },
        // ? display the budget previously code in the budgetController
        displayBudget: function(obj){
            var type;
            type = (obj.budget >= 0 ? 'inc' : 'exp');
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalIncome, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExpenses, 'exp');
            
            document.querySelector(DOMstrings.percentageLabel).textContent = 
                obj.percentage > 0 ? obj.percentage + ' %': '---';
        },
        //? displays percentage with my homemade forEach method for NodeList
        displayPercentage: function(percentages){
            var fields = document.querySelectorAll(DOMstrings.expPercLabel);

            nodeListForeach(fields, function(current, index){
                current.textContent = percentages[index] > 0 ? percentages[index] + ' %': '---';
            })
        }, 
        displayMonth : function() {
            var now, year, month, months, day;

            months = ['jan', 'feb', 'mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

            now = new Date();
            year = now.getFullYear();
            month = now.getMonth();

            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
        },   
        //? change color when changing type 
        changeType: function(){
            var fields, button;
            fields = document.querySelectorAll(
                DOMstrings.inputType +',' + 
                DOMstrings.inputDescription + ',' + 
                DOMstrings.inputValue);
            button = document.querySelector(DOMstrings.inputBtn)

            nodeListForeach(fields, function(current){
                current.classList.toggle('red-focus')
            })
            button.classList.toggle('red')
            
        },
        // ? transforms Html DOMs Classes in variables
        getDOMStrings: function() {
            return DOMstrings;
        }
    }
})();


//* CONTROLLER MODULE -- GLOBAL APP CONTROLLER --@params events delegates to other controllers
// todo Add event Handler
var controller = (function(budgetCtrl, UICtrl){

    setupEventListeners = function () {
        var DOM = UIController.getDOMStrings();

        //? Click event ==> to add an item
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)
        
        //? Keypress Event to match 'Enter' Key when pressed ==> to add an item
        document.addEventListener('keypress', function(event){
            //? console.log(event.code === 'Enter' ? 'Validated' : 'Error'); one way todo things
            if (event.keyCode === 13 || event.which == 13) {
                ctrlAddItem();
            }            
        })

        //? 
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem)

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType)
    };

    var updateBudget = function () {

        // todo 1. Calculate the budget
        budgetCtrl.calculateBudget();
        // todo 2. Return the budget
        var budget = budgetCtrl.getBudget();
        // todo 3. Display the budget on the UI
        console.log(budget);
        UIController.displayBudget(budget);
        
    }

    var updatePercentages = function() {
        // todo 1. Calculate Percentages
        budgetCtrl.calculatePercentage()

        // todo 2. Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages()
        // todo 3. update UI with the new percentages
        console.log(percentages);
        UIController.displayPercentage(percentages);
        
    }

    var ctrlAddItem = function() {
        var input, newItem;

        // todo 1. Get input values
        input = UICtrl.getInput();
        console.log(input);
        
        //! validation of input description and value
        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
        // todo 2. Add the new item to the UI 
         newItem = budgetCtrl.addItem(input.type, input.description, input.value)

         // todo 3. Add the item to the budget controller 
         UIController.addListItem(newItem, input.type);

         // todo 4. Clear the fields
         UIController.clearFields();

         //#region Look at the updateBudget Function
         // todo 5. Calculate the budget

         // todo 6. Display the budget on the UI
         //#endregion
         
         // todo 5. Calculate and Update Budget
         updateBudget();
         console.log('one button was pressed')
        }
        else{
            console.log('everything is empty')
        }

        // todo 6. Calculate and Update Percentages
        updatePercentages();
    }

    var ctrlDeleteItem = function (event) {  
       var itemID, splitID, type, ID;
       itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

       if (itemID) {
           splitID = itemID.split('-');

        type = splitID[0];
        ID = parseInt(splitID[1]);

        // todo 1. Delete the item from the data structure
        budgetController.deleteItem(type, ID)

        // todo 2. Delete the item from UI
        UIController.deleteListItem(itemID);

        // todo 3. Update and Show the new budget
        updateBudget();

        // todo 4. Calculate and Update Percentages
        updatePercentages();
        }
    }

    return {
        init: function() {
            console.log('the Application has Started');
            setupEventListeners();

            // Ressetting all fields to 0
            UIController.displayBudget({
                budget: 0,
                percentage: -1,
                totalIncome: 0,
                totalExpenses: 0
            });

            //Setting the date
            UIController.displayMonth();
        }
    }
    
})(budgetController, UIController);

controller.init();