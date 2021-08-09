const sidebarContainer = document.createElement('div');
const sidebarHeader = document.createElement('p');
const link1 = document.createElement('div');
const link1Text = document.createElement('p');
const link2 = document.createElement('div');
const link2Text = document.createElement('p');
const link3 = document.createElement('div');
const link3Text = document.createElement('p');
const link4 = document.createElement('div');
const link4Text = document.createElement('p');
const link5 = document.createElement('div');
const link5Text = document.createElement('p');
const link6 = document.createElement('div');
const link6Text = document.createElement('p');

sidebarHeader.classList.add('sidebar-header');
link1.classList.add('sidebar-link');
link2.classList.add('sidebar-link');
link3.classList.add('sidebar-link');
link4.classList.add('sidebar-link');
link5.classList.add('sidebar-link');
link6.classList.add('sidebar-link');

sidebarHeader.innerHTML = 'Projects';
link1Text.innerHTML = 'Home';
link2Text.innerHTML = 'Work';
link3Text.innerHTML = 'Shopping';
link4Text.innerHTML = 'School';
link5Text.innerHTML = 'Cooking';
link6Text.innerHTML = 'Misc';

link1.appendChild(link1Text);
link2.appendChild(link2Text);
link3.appendChild(link3Text);
link4.appendChild(link4Text);
link5.appendChild(link5Text);
link6.appendChild(link6Text);

sidebarContainer.appendChild(sidebarHeader);
sidebarContainer.appendChild(link1);
sidebarContainer.appendChild(link2);
sidebarContainer.appendChild(link3);
sidebarContainer.appendChild(link4);
sidebarContainer.appendChild(link5);
sidebarContainer.appendChild(link6);


sidebarContainer.setAttribute('id','sidebar');



export const sidebar = sidebarContainer;