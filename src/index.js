import { format, compareAsc } from 'date-fns';
import Swal from 'sweetalert2';
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
    const tabAll = document.getElementById('All');
    const tabShopping = document.getElementById('Shopping');
    const tabWork = document.getElementById('Work');
    const tabSocial = document.getElementById('Social');
    const tabHousework = document.getElementById('Housework');
    const tabNotes = document.getElementById('Notes');
    const categoryTitle = document.getElementById('category-title');
    const contentRight = document.getElementById('content-right');
    const submitButton = document.getElementById('add-task');
    const inputField = document.getElementById('task-input');
    const list = document.getElementById('list');
    const modalDetails = document.getElementById('modal-details');
    const modalTaskTitle = document.getElementById('modal-task-title');
    const modalSave = document.getElementById('modal-save');
    const priorityList = document.getElementById('priority-list');
    const category1 = document.getElementById('cat1');
    const category2 = document.getElementById('cat2');
    const category3 = document.getElementById('cat3');
    const category4 = document.getElementById('cat4');
    const category5 = document.getElementById('cat5');
    const datePicker = document.getElementById('date-picker');
    const columns = document.createElement('div');
    const aColumn = document.createElement('div');
    
    
    submitButton.addEventListener('click', function(event) {
        addTodo(inputField.value);
    });

    columns.classList.add('columns','is-centered');
    aColumn.classList.add('column','is-three-fifths','is-offset-one-fifth','is-centered','mt-6');

    list.appendChild(aColumn);

    return {
        tabAll,
        tabShopping,
        tabWork,
        tabSocial,
        tabHousework,
        tabNotes,
        categoryTitle,
        contentRight,
        inputField,
        submitButton,
        modalDetails,
        modalTaskTitle,
        modalSave,
        priorityList,
        category1,
        category2,
        category3,
        category4,
        category5,
        datePicker,
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

function renderFilteredTodos(arr) {
    displayElement.aColumn.innerHTML = '';
    arr.forEach(function(item) {
        const newItem = createItemElement(item,arr);
        displayElement.aColumn.appendChild(newItem);
    })
}

function addTodo(item) {
    if (item != '') {
        const todo = {
            id: Date.now(),
            title: item,
            details: '',
            priority: '',
            deadline: '',
            category: [false,false,false,false,false],
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
        task.title = '';
        task.details = displayElement.modalDetails.value;
        task.title = displayElement.modalTaskTitle.value;
        task.priority = displayElement.priorityList.value;
        task.deadline = displayElement.datePicker.value;

        for (let i = 0; i < 5; i++) {
            if (document.getElementById(`cat${i+1}`).checked == true) {
                task.category[i] = true;
            } else {
                task.category[i] = false;
            }
        }

        localStorage.setItem('todos', JSON.stringify(todos));
        clearModalFields();
        renderTodos();
    }
}


function clearModalFields() {
    displayElement.modalDetails.value = '';
    displayElement.modalTaskTitle.value = '';
    displayElement.category1.checked = false;
    displayElement.category2.checked = false;
    displayElement.category3.checked = false;
    displayElement.category4.checked = false;
    displayElement.category5.checked = false;
    displayElement.priorityList.value = 'Low';
    displayElement.datePicker.value = '';
}

localStorageController.getFromLocalStorage();




//=======================================================================
//=========================== Event Listeners ===========================

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

displayElement.tabAll.addEventListener('click', (e) => {
    localStorageController.getFromLocalStorage();
    displayElement.categoryTitle.innerHTML = 'ALL TASKS';
});

displayElement.tabShopping.addEventListener('click', (e) => { 
    let filteredTodos = [];
    const reference = window.localStorage.getItem('todos');
        if (reference) {
            let filterTodos = JSON.parse(reference);
            filterTodos.forEach(function(item) {
                if (item.category[0] == true) {
                    filteredTodos.push(item);
                }
            })
        }
    renderFilteredTodos(filteredTodos);
    displayElement.categoryTitle.innerHTML = 'SHOPPING';
});

displayElement.tabWork.addEventListener('click', (e) => {
    let filteredTodos = [];
    const reference = window.localStorage.getItem('todos');
        if (reference) {
            let filterTodos = JSON.parse(reference);
            filterTodos.forEach(function(item) {
                if (item.category[1] == true) {
                    filteredTodos.push(item);
                }
            })
        }
    renderFilteredTodos(filteredTodos);
    displayElement.categoryTitle.innerHTML = 'WORK';
});

displayElement.tabSocial.addEventListener('click', (e) => {
    let filteredTodos = [];
    const reference = window.localStorage.getItem('todos');
        if (reference) {
            let filterTodos = JSON.parse(reference);
            filterTodos.forEach(function(item) {
                if (item.category[2] == true) {
                    filteredTodos.push(item);
                }
            })
        }
    renderFilteredTodos(filteredTodos);
    displayElement.categoryTitle.innerHTML = 'SOCIAL';
});

displayElement.tabHousework.addEventListener('click', (e) => {
    let filteredTodos = [];
    const reference = window.localStorage.getItem('todos');
        if (reference) {
            let filterTodos = JSON.parse(reference);
            filterTodos.forEach(function(item) {
                if (item.category[3] == true) {
                    filteredTodos.push(item);
                }
            })
        }
    renderFilteredTodos(filteredTodos);
    displayElement.categoryTitle.innerHTML = 'HOUSEWORK';
});

displayElement.tabNotes.addEventListener('click', (e) => {
    let filteredTodos = [];
    const reference = window.localStorage.getItem('todos');
        if (reference) {
            let filterTodos = JSON.parse(reference);
            filterTodos.forEach(function(item) {
                if (item.category[4] == true) {
                    filteredTodos.push(item);
                }
            })
        }
    renderFilteredTodos(filteredTodos);
    displayElement.categoryTitle.innerHTML = 'NOTES';
});

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
    Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor: '#02cc1d',
    title: '<b style="color:#d9d9d9;">Your task has been updated!</b>',
    showConfirmButton: false,
    timer: 1500,
    heightAuto: false,
    background: '#742cd6',
    
    })
    document.getElementById('modal-window').style.display = 'none';
})

  //======================================================================
  
 