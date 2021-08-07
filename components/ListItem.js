//=========================Todo List Item=============================
function ListItem(title) {
    this.title = title;
}

 export function createItemElement(title) {

    let item = new ListItem(title);

    const itemContainer = document.createElement('div');
    const itemTitle = document.createElement('p');
    const itemCategoryColor = document.createElement('p');
    const itemCategoryColorSlicer = document.createElement('span');
    
    itemContainer.classList.add('list-item-container');
    itemTitle.classList.add('item-title');

    // Category indicator - top right of the card
    itemCategoryColor.classList.add('box');
    itemCategoryColorSlicer.classList.add('content');

    itemTitle.innerHTML = item.title;

    itemContainer.appendChild(itemTitle);
    itemCategoryColor.appendChild(itemCategoryColorSlicer);
    itemContainer.appendChild(itemCategoryColor);

    return (itemContainer);
}        
//=====================================================================
    