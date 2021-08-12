import { deleteTodo } from "../src/index.js";
import { displayItemDetails } from "./ItemDetails.js";

//=========================Todo List Item=============================

export function createItemElement(item,todos) {


    const card = document.createElement('div');
    const cardHeader = document.createElement('header');
    const cardHeaderTitle = document.createElement('p');
    const deleteButton = document.createElement('button');
    const iconSpan = document.createElement('span');
    const icon = document.createElement('i');
    const checkControl = document.createElement('div');
    const checkLabel = document.createElement('label');
    const checkbox = document.createElement('input');
    const controlIndicator = document.createElement('div');

    const taskDetails = document.getElementById('modal-details');

    card.classList.add('card','my-5');
    card.setAttribute('data-key', item.id);
    cardHeader.classList.add('card-header');
    cardHeaderTitle.classList.add('card-header-title');
    cardHeaderTitle.innerHTML = item.title;
    checkControl.classList.add('controlx','control--checkbox');
    checkLabel.classList.add('checkbox');
    checkbox.setAttribute('type','checkbox');
    controlIndicator.classList.add('control__indicator');
    deleteButton.classList.add('card-header-icon');
    deleteButton.setAttribute('aria-label','delete');
    iconSpan.classList.add('icon');
    icon.classList.add('fa','fa-trash','trash-hover');
    icon.setAttribute('aria-hidden','true');

    iconSpan.addEventListener('click', (event) => {
        const getId = event.target.closest('div');
        deleteTodo(getId.getAttribute('data-key'));
    })

    cardHeaderTitle.addEventListener('click', (event) => {
        const getId = event.target.closest('div');
        displayItemDetails(getId.getAttribute('data-key'),todos);
        document.getElementById('modal-window').style.display = 'block';
        document.getElementById('modal-window').style.opacity = '1';

    })

    checkLabel.appendChild(checkbox);
    checkLabel.appendChild(controlIndicator);
    checkControl.appendChild(checkLabel);

    iconSpan.appendChild(icon);
    deleteButton.appendChild(checkControl);
    deleteButton.appendChild(iconSpan);
    
    cardHeader.appendChild(cardHeaderTitle);
    cardHeader.appendChild(deleteButton);
    card.appendChild(cardHeader);

    if (item.priority == 'Low') {
        card.classList.add('low-priority');
    } else if (item.priority == 'Medium') {
        card.classList.add('medium-priority');
    } else if (item.priority == 'High') {
        card.classList.add('high-priority');
    } else if (item.priority == 'Urgent') {
        card.classList.add('urgent-priority');
    }

    return (card)

} 

// Builds a Todo list item