const toolbarContainer = document.createElement('div');
const toolbarLink1 = document.createElement('p');
const toolbarLink2 = document.createElement('p');
toolbarContainer.setAttribute('id','toolbar');
toolbarLink1.innerHTML = "Text here";
toolbarLink2.innerHTML = "Other text";

toolbarContainer.appendChild(toolbarLink1);
toolbarContainer.appendChild(toolbarLink2);

export const toolbar = toolbarContainer;