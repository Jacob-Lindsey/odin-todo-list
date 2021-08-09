//=========================Todo List Item=============================

export function createItemElement(title) {


    const card = document.createElement('div');
    const cardHeader = document.createElement('div');
    const cardHeaderTitle = document.createElement('p');
    const cardHeaderIcon = document.createElement('button');
    const cardIconSpan = document.createElement('span');
    const cardIcon = document.createElement('i');
    const cardContentContainer = document.createElement('div');
    const cardContent = document.createElement('div');

    cardHeaderTitle.innerHTML = title;

    card.classList.add('card');
    card.classList.add('spacer');
    cardHeader.classList.add('card-header');
    cardHeaderTitle.classList.add('card-header-title');
    cardHeaderIcon.classList.add('card-header-icon');
    cardHeaderIcon.setAttribute('aria-label','more options');
    cardIconSpan.classList.add('icon');
    cardIcon.classList.add('fas','fa-angle-down');
    cardIcon.setAttribute('aria-hidden','true');

    cardContentContainer.classList.add('card-content');
    cardContent.classList.add('content');

    cardIconSpan.appendChild(cardIcon);
    cardHeaderIcon.appendChild(cardIconSpan);
    // cardContentContainer.appendChild(cardContent);
    cardHeader.appendChild(cardHeaderTitle);
    cardHeader.appendChild(cardHeaderIcon);
    card.appendChild(cardHeader);
    // card.appendChild(cardContentContainer);


    return (card);

} 

//=====================================================================

