
//* DATA MODULE -- BUDGET CONTROLLER
// todo Add the new item  to our data structure 
// todo Calculate the budget 
var budgetController = (function(){
    

    //? function construction for Exp and Inc

    var Expense = function (id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
        // allExpenses: [],
        // allIncomes: [],
        // totalExpenses: 0
    }
    
})();

//* UI MODULE -- UI CONTROLLER


var UIController = (function(){
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //? Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
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

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)
    
        document.addEventListener('keypress', function(event){
            //? console.log(event.code === 'Enter' ? 'Validated' : 'Error'); one way todo things
            if (event.keyCode === 13 || event.which == 13) {
                ctrlAddItem();
            }
            
        })
    }

    var ctrlAddItem = function() {
        
        // todo 1. Get input values
        var input = UICtrl.getInput();
        console.log(input);
        
        // todo 2. Add the new item to the UI 
    
        // todo 3. Add the item to the budget controller 
    
        // todo 4. Calculate the budget
    
        // todo 5. Display the budget on the UI
        console.log('one button was pressed')
    }

    return {
        init: function() {
            console.log('the Application has Started');
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);

controller.init();