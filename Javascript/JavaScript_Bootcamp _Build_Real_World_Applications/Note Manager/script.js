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
var DataController = (function() {})();

// All functions to control the ui
var UIController = (function() {
  var Domstring = {
    button: "add-btn",
    inputText: "add-input",
    unorderedList: "ul",
    editIcon: "fa-pencil-square-o",
    removeIcon: "fa-times"
  };
  var valeur;

  return {
    getDOMStrings: function() {
      return Domstring;
    },
    getInput: function() {
      return {
        value: document.getElementById(Domstring.inputText).value
      };
    },
    createNote: function(element, valeur) {
      var note = `<li>
                    <p>${valeur}</p>
                    <p><i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i></p>
                    <input class="edit-note" type="text">
                </li>`;
      document.querySelector(element).insertAdjacentHTML("afterend", note);
    },
    deleteNote: function() {
      var ul = document.querySelector(Domstring.unorderedList);

      ul.addEventListener("click", function(e) {
        e.preventDefault();

        if (e.target.classList[1] === Domstring.removeIcon) {
          var note = e.target.parentNode.parentNode;
          console.log(e.target.parentNode.parentNode);
          note.remove();
        }
      });
    },
    clearInput: function() {
      document.getElementById(Domstring.inputText).value = "";
      document.getElementById(Domstring.inputText).focus();
    },
    editInput: function() {
      var ul = document.querySelector(Domstring.unorderedList);

      ul.addEventListener("click", function(e) {
        e.preventDefault();
        var note, editInput, editingIcons;

        editingIcons = e.target.parentNode;
        note = e.target.parentNode.previousElementSibling;
        editInput = e.target.parentNode.nextElementSibling;

        // make editing icons disappear
        if (e.target.classList[1] === Domstring.editIcon) {
          console.log(e.target.classList[1]);

          editInput.style.display = "block";
          editInput.value = note.textContent;
          editingIcons.style.display = "none";

          editInput.focus();

          editInput.addEventListener("keypress", function(e) {
            if (e.keyCode === 13) {
              // console.log(e)

              note.textContent = editInput.value;
              editInput.style.display = "none";
              editingIcons.style.display = "block";
            }
          });
        }
        // console.log(note.textContent) just for testing purposes

        // console.log(editInput.value);
      });
    },
    hidingNotes: function() {
      var ul, hidebutton, label;
      ul = document.querySelector(Domstring.unorderedList);
      label = document.querySelector("label");
      hidebutton = document.getElementById("hide");

      hidebutton.addEventListener("click", function() {
        ul.style.display = hidebutton.checked ? "none" : "block";
        label.textContent = hidebutton.checked ? "Unhide note" : "Hide note";
      });
    },
    filterNotes: function() {
      var searchInput = document.querySelector("#search-note input");
      var ul = document.querySelector(Domstring.unorderedList);

      searchInput.addEventListener("keyup", function(e) {
        var searchChar = e.target.value.toLowerCase();
        var notes = ul.getElementsByTagName("li");
        console.log(searchChar);
        Array.from(notes).forEach(note => {
          var parText = note.firstElementChild.textContent;

          if (parText.toLowerCase().indexOf(searchChar) !== -1) {
            note.style.display = "block";
          } else {
            note.style.display = "none";
          }
        });
      });
    }
  };
})();

// Master Controller
var Controller = (function(uiCtrl, dataCtrl) {
  var DOM = UIController.getDOMStrings();

  var button = document.getElementById(DOM.button);

  // console.log(button)
  var SetEventListeners = function() {
    button.addEventListener("click", function(e) {
      addNote(e);
      // console.log(e.target);
      uiCtrl.clearInput();
    });
    editNote();
    eraseNote();
    uiCtrl.filterNotes();
    uiCtrl.hidingNotes();
  };

  var addNote = function(e) {
    e.preventDefault();
    // take the Text input
    var input = uiCtrl.getInput();
    // console.log(input.value)

    // add the note in the data structure
    uiCtrl.createNote("li:last-child", input.value);
  };

  var editNote = function() {
    // make the editing input appear
    uiCtrl.editInput();
    // todo with the note inside

    // edit the note and save it
  };

  var eraseNote = function() {
    uiCtrl.deleteNote();
  };

  return {
    init: function() {
      SetEventListeners();
    }
  };

  var filteringNotes = function() {
    uiCtrl.filterNotes();
  };
})(UIController, DataController);

Controller.init();
