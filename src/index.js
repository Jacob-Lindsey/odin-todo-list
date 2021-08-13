import { format, compareAsc } from 'date-fns';
import Swal from 'sweetalert2';
import './bulma.css';
import './style.css';
import './normalize.css';
import { createItemElement } from '../components/ListItem'; 
// import { displayItemDetails } from '../components/ItemDetails';

//======================================================================
//======================================================================

//=============
let todos = [];
let projects = [];
//=============

//=======================================================================
//============================= UI Functions ============================

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
    const pageTitle = document.getElementById('page-title');
    const modalTitle = document.getElementById('modal-title');
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
    const projectLinkList = document.getElementById('project-link-list');
    const defaultProject = document.getElementById('default-project');
    const newProjectSidebar = document.getElementById('new-project');
    const newProjectTopNav = document.getElementById('new-project-top-nav');
    const projectSelector = document.getElementById('project-selector');
    const projectModalWindow = document.getElementById('project-modal-window');
    const projectModalTitle = document.getElementById('project-modal-title');
    const projectInput = document.getElementById('project-input');
    const projectModalDetails = document.getElementById('project-modal-details');
    const projectModalTaskTitle = document.getElementById('project-modal-task-title');
    const projectModalSave = document.getElementById('project-modal-save');

    const columns = document.createElement('div');
    const aColumn = document.createElement('div');
    
    columns.classList.add('columns','is-centered');
    aColumn.classList.add('column','is-three-fifths','is-offset-one-fifth','is-centered','mt-6');
    aColumn.setAttribute('id','mobile-column');

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
        pageTitle,
        submitButton,
        modalTitle,
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
        projectLinkList,
        defaultProject,
        newProjectSidebar,
        newProjectTopNav,
        projectSelector,
        projectModalWindow,
        projectModalTitle,
        projectInput,
        projectModalDetails,
        projectModalTaskTitle,
        projectModalSave,
        columns,
        aColumn,
    };
})();

//==============================================================================
//===========================Todo Local Storage Functions===========================

const localStorageController = (function () {

    function getFromLocalStorage() {
        const reference = window.localStorage.getItem('todos');
        if (reference) {
            todos = JSON.parse(reference);
            todoController.renderTodos();
        }
    }
    function addToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos));
        todoController.renderTodos();
    }
    return {
        getFromLocalStorage,
        addToLocalStorage,
    };
})();

//==============================================================================
//===========================Project Local Storage Functions===========================

const projectLocalStorageController = (function () {

    function getFromLocalStorage() {
        const reference = window.localStorage.getItem('projects');
        if (reference) {
            projects = JSON.parse(reference);
            projectController.renderProjects();
        }
    }
    function addToLocalStorage() {
        localStorage.setItem('projects', JSON.stringify(projects));
        projectController.renderProjects();
    }
    return {
        getFromLocalStorage,
        addToLocalStorage,
    };
})();

//=============================================================================
//===========================Project Object Functions===========================

const projectController = (function () {

    function renderProjects() {
        displayElement.projectLinkList.innerHTML = '';
        projects.forEach(function(item) {
            const newItem = createNewProject(item.title);
            newItem.addEventListener('click', function() {
                displayElement.pageTitle.innerHTML = item.title;
            })
            const projectSelectorOption = document.createElement('option');
            projectSelectorOption.setAttribute('value',item.title);
            projectSelectorOption.innerHTML = `${item.title}`;
            displayElement.projectSelector.appendChild(projectSelectorOption);
        })
    }
    
    function addProject(item) {
        if (item != '') {
            const project = {
                id: Date.now(),
                title: item,
                projects: [],
            };
            projects.push(project);
            projectLocalStorageController.addToLocalStorage();
            displayElement.projectInput.value = '';
        }
    }

    return {
        renderProjects,
        addProject,
    }
})();

//=============================================================================
//===========================Todo Object Functions===========================

const todoController = (function () {

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
    
    function addTodo(item,project) {
        if (item != '') {
            const todo = {
                id: Date.now(),
                title: item,
                details: '',
                priority: '',
                deadline: '',
                project: project,
                category: [false,false,false,false,false],
                completed: false,
            };
            todos.push(todo);
            localStorageController.addToLocalStorage();
            displayElement.inputField.value = '';
        }
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
            task.project = displayElement.projectSelector.value;
    
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

    return {
        renderTodos,
        renderFilteredTodos,
        addTodo,
        editTodo,
    }
})();

export function deleteTodo(id) {
    todos = todos.filter(function(item) {
        return item.id != id;
    });

    localStorageController.addToLocalStorage();
}

function createNewProject(title) {
    const projectItem = document.createElement('li');
    const projectLink = document.createElement('a');
    projectLink.innerHTML = title;
    projectItem.appendChild(projectLink);
    displayElement.projectLinkList.appendChild(projectItem);

    return(projectItem);
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
projectLocalStorageController.getFromLocalStorage();

//=======================================================================
//=========================== Event Listeners ===========================

const appEventListeners = (function () {

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

// // //================================================================================
// // //=========================Highlights Active Sidebar Tab==========================

    displayElement.tabAll.addEventListener('click', (e) => {
        localStorageController.getFromLocalStorage();
        displayElement.tabAll.firstElementChild.classList.add('active-tab');
        displayElement.tabShopping.firstElementChild.classList.remove('active-tab');
        displayElement.tabWork.firstElementChild.classList.remove('active-tab');
        displayElement.tabSocial.firstElementChild.classList.remove('active-tab');
        displayElement.tabHousework.firstElementChild.classList.remove('active-tab');
        displayElement.tabNotes.firstElementChild.classList.remove('active-tab');
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
                displayElement.tabAll.firstElementChild.classList.remove('active-tab');
                displayElement.tabShopping.firstElementChild.classList.add('active-tab');
                displayElement.tabWork.firstElementChild.classList.remove('active-tab');
                displayElement.tabSocial.firstElementChild.classList.remove('active-tab');
                displayElement.tabHousework.firstElementChild.classList.remove('active-tab');
                displayElement.tabNotes.firstElementChild.classList.remove('active-tab');
            }
        todoController.renderFilteredTodos(filteredTodos);
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
                displayElement.tabAll.firstElementChild.classList.remove('active-tab');
                displayElement.tabShopping.firstElementChild.classList.remove('active-tab');
                displayElement.tabWork.firstElementChild.classList.add('active-tab');
                displayElement.tabSocial.firstElementChild.classList.remove('active-tab');
                displayElement.tabHousework.firstElementChild.classList.remove('active-tab');
                displayElement.tabNotes.firstElementChild.classList.remove('active-tab');
            }
            todoController.renderFilteredTodos(filteredTodos);
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
                displayElement.tabAll.firstElementChild.classList.remove('active-tab');
                displayElement.tabShopping.firstElementChild.classList.remove('active-tab');
                displayElement.tabWork.firstElementChild.classList.remove('active-tab');
                displayElement.tabSocial.firstElementChild.classList.add('active-tab');
                displayElement.tabHousework.firstElementChild.classList.remove('active-tab');
                displayElement.tabNotes.firstElementChild.classList.remove('active-tab');
            }
            todoController.renderFilteredTodos(filteredTodos);
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
                displayElement.tabAll.firstElementChild.classList.remove('active-tab');
                displayElement.tabShopping.firstElementChild.classList.remove('active-tab');
                displayElement.tabWork.firstElementChild.classList.remove('active-tab');
                displayElement.tabSocial.firstElementChild.classList.remove('active-tab');
                displayElement.tabHousework.firstElementChild.classList.add('active-tab');
                displayElement.tabNotes.firstElementChild.classList.remove('active-tab');
            }
            todoController.renderFilteredTodos(filteredTodos);
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
                displayElement.tabAll.firstElementChild.classList.remove('active-tab');
                displayElement.tabShopping.firstElementChild.classList.remove('active-tab');
                displayElement.tabWork.firstElementChild.classList.remove('active-tab');
                displayElement.tabSocial.firstElementChild.classList.remove('active-tab');
                displayElement.tabHousework.firstElementChild.classList.remove('active-tab');
                displayElement.tabNotes.firstElementChild.classList.add('active-tab');
            }
            todoController.renderFilteredTodos(filteredTodos);
    });
    
// // //================================================================================
// // //======================Updates Todo Object's Project Value=======================

    displayElement.inputField.addEventListener('keydown', function(event) {
        if (displayElement.inputField.value && event.key == 'Enter') {
            let currentProject = document.getElementById('page-title').textContent;
            todoController.addTodo(displayElement.inputField.value,currentProject);
        }
    });
    
    displayElement.submitButton.addEventListener('click', function(event) {
        let currentProject = document.getElementById('page-title').textContent;
        todoController.addTodo(displayElement.inputField.value,currentProject);
    });
    
// // //================================================================================
// // //===========================Handling Modal Open/Close============================

    document.getElementById('modal-exit').addEventListener('click', function() {
        document.getElementById('modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
    });
    
    document.getElementById('modal-cancel').addEventListener('click', function() {
        document.getElementById('modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
    });
    
    document.addEventListener('click', function(event) {
        if (event.target.classList[0] == 'modal-background') {
        document.getElementById('modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
        }
    });

    document.getElementById('project-modal-exit').addEventListener('click', function() {
        document.getElementById('project-modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
    });
    
    document.getElementById('project-modal-cancel').addEventListener('click', function() {
        document.getElementById('project-modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
    });
    
    document.addEventListener('click', function(event) {
        if (event.target.classList[0] == 'modal-background') {
        document.getElementById('project-modal-window').style.display = 'none';
        document.body.classList.remove('modal-open');
        }
    });

    displayElement.newProjectSidebar.addEventListener('click', () => {
        displayElement.projectModalWindow.style.display = 'block';
        displayElement.projectModalWindow.style.opacity = '1';
        document.body.classList.add('modal-open');
    });

    displayElement.newProjectTopNav.addEventListener('click', () => {
        displayElement.projectModalWindow.style.display = 'block';
        displayElement.projectModalWindow.style.opacity = '1';
        document.body.classList.add('modal-open');
    });

    window.addEventListener('keydown', function(event) {
        if (event.key == 'n') {
            displayElement.projectModalWindow.style.display = 'block';
            displayElement.projectModalWindow.style.opacity = '1';
            document.body.classList.add('modal-open');
        }
    })

    window.addEventListener('keydown', function(event) {
        if (event.key == 'Escape') {
            document.getElementById('project-modal-window').style.display = 'none';
            document.getElementById('modal-window').style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    })

// // //================================================================================
// // //==============Event Listeners With Confimation Animations Attached==============

    document.getElementById('move-project').addEventListener('click', function(event) {
        todoController.editTodo();
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
        document.body.classList.remove('modal-open');
    } )
    
    displayElement.modalSave.addEventListener('click', function(event) {
        todoController.editTodo();
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
        document.body.classList.remove('modal-open');
    });
    
    displayElement.modalSave.addEventListener('keydown', function(event) {
        if (event.key == 'Enter') {
            todoController.editTodo();
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
        document.body.classList.remove('modal-open');
        }
    });

    displayElement.projectModalSave.addEventListener('click', function(event) {
        if (displayElement.projectInput.value) {
            projectController.addProject(displayElement.projectInput.value);
            Swal.fire({
                position: 'center',
                icon: 'success',
                iconColor: '#02cc1d',
                title: '<b style="color:#d9d9d9;">Your project has been created!</b>',
                showConfirmButton: false,
                timer: 1500,
                heightAuto: false,
                background: '#742cd6',
                
            })
            displayElement.projectModalWindow.style.display = 'none';
            document.body.classList.remove('modal-open');
        } else {
            alert('Please enter a title for your project');
        }
        
    });
    
    displayElement.projectModalSave.addEventListener('keydown', function(event) {
        if (event.key == 'Enter') {
            createNewProject(displayElement.projectInput.value);
            projectController.addProject(displayElement.projectInput.value);
            Swal.fire({
            position: 'center',
            icon: 'success',
            iconColor: '#02cc1d',
            title: '<b style="color:#d9d9d9;">Your project has been created!</b>',
            showConfirmButton: false,
            timer: 1500,
            heightAuto: false,
            background: '#742cd6',
        
        })
        displayElement.projectModalWindow.style.display = 'none';
        document.body.classList.remove('modal-open');
        }
    });

    displayElement.defaultProject.addEventListener('click', () => {
        displayElement.pageTitle.innerHTML = 'Default Project';
    })

    

})();
