// Lecture: Get And Manipulate On Individual Elements - Part 1

/*
console.log(document.getElementById('list'));

var el = document.getElementById('list');
console.log(el);
console.log(typeof el);

// var el = document.getElementById('LIST');
// console.log(el);

console.log(el.textContent);
console.log(el.textContent = 'Hello');

var heading = document.getElementById('heading').textContent;
console.log(heading);

var ulElement = document.getElementById('list');
console.log(ulElement.textContent = heading);

console.log(el.innerHTML);
console.log(el.innerHTML = 'Hello');
console.log(el.innerHTML = '<h1>Hello</h1>');
console.log(el.textContent = '<h1>Hello</h1>');
*/

// var h2 = document.querySelector('h2')

// h2.onclick = (e) => console.log(e.type)
// h2.onmouseenter = (e) => console.log(e.type)
// h2.onmouseover = (e) => console.log(e.type)



// var secondLi = document.querySelector('li:nth-child(2)')



// secondLi.addEventListener('click', function(e){
//     console.log(secondLi.querySelector('p:nth-child(2)').lastElementChild.getAttribute('class'));
//     console.log(e.target)
//     document.createElement('button')
// })


// All datas in my app
var DataController = (function(){
    
})();

// All functions to control the ui
var UIController = (function(){

    var Domstring = {
        button: 'add-btn',
        inputText: 'add-input'
    }
    var valeur;

    
    return{
        getDOMStrings: function(){
            return Domstring;
        },
        getInput: function() {
            return {
                value: document.getElementById(Domstring.inputText).value
            }
        },
        createNote: function (element, valeur) {
            var note = `<li>
                            <p>${valeur}</p>
                            <p><i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i></p>
                            <input class="edit-note" type="text">
                        </li>`
            document.querySelector(element).insertAdjacentHTML('afterend', note)
        },
        clearInput: function(){
            document.getElementById(Domstring.inputText).value = '';
            document.getElementById(Domstring.inputText).focus();
        }
    }
    
})();

// Master Controller
var Controller = (function(uiCtrl, dataCtrl){

    var DOM = UIController.getDOMStrings();

    var button = document.getElementById(DOM.button);

    // console.log(button)
    var SetEventListeners = function(){
        button.addEventListener('click', function(e){
            addNote(e);
            // console.log(e.target);
            uiCtrl.clearInput();
        });
                

    }
            var addNote = function(e) {
                e.preventDefault();
                // take the Text input
                var input = uiCtrl.getInput();
                // console.log(input.value)
                
                // add the note in the data structure
                uiCtrl.createNote('li:last-child', input.value)
            }

    return {
        init: function(){
            SetEventListeners();
        }
    }
    

})(UIController, DataController);

Controller.init();








