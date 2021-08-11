import { format, compareAsc } from 'date-fns';
import './bulma.css';
import './style.css';
import './normalize.css';
import { createItemElement } from '../components/ListItem'; 
import { createItemDetails, displayItemDetails } from '../components/ItemDetails';
import { newItemButton } from '../components/NewItemButton';
// import { sidebar } from '../components/Sidebar';
import { toolbar } from '../components/Toolbar';



//  ----------------------------- IMPORT ANY IMAGES HERE! -----------------------------

//  -----------------------------------------------------------------------------------

//  ----------------------- ADD ANY IMPORTED FONT FILES TO /SRC -----------------------

let todos = [];

const displayElement = (function() {
    const contentRight = document.getElementById('content-right');
    const submitButton = document.getElementById('add-task');
    const inputField = document.getElementById('task-input');
    const list = document.getElementById('list');
    const modalDetails = document.getElementById('modal-details');
    const modalSave = document.getElementById('modal-save');
    const columns = document.createElement('div');
    const aColumn = document.createElement('div');
    
    submitButton.addEventListener('click', function(event) {
        addTodo(inputField.value);
    });

    columns.classList.add('columns','is-centered');
    aColumn.classList.add('column','is-three-fifths','is-offset-one-fifth','is-cenetered','mt-6');

    list.appendChild(aColumn);

    return {
        inputField,
        submitButton,
        modalDetails,
        modalSave,
        columns,
        aColumn,
    };
})();

//====================================================================

const localStorageController = (function () {

    function getFromLocalStorage() {
        const reference = window.localStorage.getItem('todos');
        if (reference) {
            todos = JSON.parse(reference);
            renderTodos();
        }
    }
    function addToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
    }
    return {
        getFromLocalStorage,
        addToLocalStorage,
    };
})();

//======================================================================

function renderTodos() {
    displayElement.aColumn.innerHTML = '';
    todos.forEach(function(item) {
        const newItem = createItemElement(item,todos);
        displayElement.aColumn.appendChild(newItem);
    })
}

function addTodo(item) {
    if (item != '') {
        const todo = {
            id: Date.now(),
            title: item,
            details: '',
            completed: false,
        };
        todos.push(todo);
        localStorageController.addToLocalStorage();
        displayElement.inputField.value = '';
    }
}

export function deleteTodo(id) {
    todos = todos.filter(function(item) {
        return item.id != id;
    });

    localStorageController.addToLocalStorage();
}

function editTodo() {
    let task = '';
    const taskID = document.getElementById('hidden-id').innerHTML;
    let reference = localStorage.getItem('todos');
    if (reference) {
        todos = JSON.parse(reference);
        const taskDetails = todos.filter(function(e) {
            return (e.id == taskID);
        });
        let taskIndex = todos.findIndex(x => x.id == taskID);
        todos[taskIndex].details = displayElement.modalDetails.value;
        task = taskDetails[0];
        task.details = '';
        task.details = displayElement.modalDetails.value;
        localStorage.setItem('todos', JSON.stringify(todos));
        
    }
    console.log(todos);
}

localStorageController.getFromLocalStorage();



//======================================================================

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

  //======================================================================

  document.getElementById('modal-exit').addEventListener('click', function() {
      document.getElementById('modal-window').style.display = 'none'
  });

  document.getElementById('modal-cancel').addEventListener('click', function() {
      document.getElementById('modal-window').style.display = 'none'
  });

  document.addEventListener('click', function(event) {
      if (event.target.classList[0] == 'modal-background') {
        document.getElementById('modal-window').style.display = 'none';
      }
  });

  displayElement.modalSave.addEventListener('click', function(event) {
      editTodo();
      document.getElementById('modal-window').style.display = 'none';
  })

  //======================== Status Indicator ========================
  
 