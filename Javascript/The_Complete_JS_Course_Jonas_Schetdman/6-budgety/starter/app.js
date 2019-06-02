
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

    // !
    return {
        addItem: function(type, des, val) {
            var newItems, ID;

            //* Create a new id
            ID = (data.allItems[type].length <= 0 ? 0 
                : data.allItems[type][data.allItems[type].length - 1].id + 1);

            // if(type === 'exp'){
            //     newItems = new Expense(ID, des, val)
            // }
            // else{
            //     newItems = new Income(ID, des, val)
            // }

            //* Create a new item based on inc or exp
            newItems = (type === 'exp' ? new Expense(ID, des, val) : new Income(ID, des, val));

            //* Push the new item into the data Structure
            data.allItems[type].push(newItems);

            //* return the new item
            return newItems; 
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
        expensesContainer: '.expenses__list'
    }

    return {
        // ? takes info from the DOM
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //? Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;
                
                // todo Create Html String with a placeholder text

                if(type === 'inc'){
                    element = DOMstrings.incomeContainer;
                    html = '<div class="item clearfix" id="income-%id%">'
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
                        html = '<div class="item clearfix" id="expense-%id%">'
                                +'<div class="item__description">%description%</div>'
                                +'<div class="right clearfix">'
                                    +'<div class="item__value">%value%</div>'
                                    +'<div class="item__delete">'
                                        +'<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                                    +'</div>'
                                +'</div>'
                            +'</div>';
                }
                // todo Replace the placeholder with  some actual data
                newHtml = html.replace('%id%', obj.id);
                newHtml = newHtml.replace('%description%', obj.description);
                newHtml = newHtml.replace('%value%', obj.value);

                // todo Insert the Html into the DOM
                document.querySelector(element).insertAdjacentHTML('beforebegin', newHtml)
            
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

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)
    
        document.addEventListener('keypress', function(event){
            //? console.log(event.code === 'Enter' ? 'Validated' : 'Error'); one way todo things
            if (event.keyCode === 13 || event.which == 13) {
                ctrlAddItem();
            }
            
        })
    }

    var ctrlAddItem = function() {
        var input, newItem;
        // todo 1. Get input values
        input = UICtrl.getInput();
        console.log(input);
        
        // todo 2. Add the new item to the UI 
        
         newItem = budgetCtrl.addItem(input.type, input.description, input.value)
        // todo 3. Add the item to the budget controller 
        UIController.addListItem(newItem, input.type);
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