import { format, compareAsc } from 'date-fns';
import './style.css';
import './bulma.css';
import './normalize.css';
import { createItemElement } from '../components/ListItem';
import { newItemButton } from '../components/NewItemButton';
import { sidebar } from '../components/Sidebar';
import { toolbar } from '../components/Toolbar';



//  ----------------------------- IMPORT ANY IMAGES HERE! -----------------------------

//  -----------------------------------------------------------------------------------

//  ----------------------- ADD ANY IMPORTED FONT FILES TO /SRC -----------------------

const main = document.createElement('div');

const nav = document.createElement('nav');
const container = document.createElement('div');
const navLeft = document.createElement('div');
const navItemTop = document.createElement('a');
const content = document.createElement('div');
const contentSection = document.createElement('section');

main.setAttribute('id','app');
nav.classList.add('nav','has-shadow');
container.classList.add('container');
navLeft.classList.add('nav-left');
navItemTop.classList.add('nav-item');
content.classList.add('container','column','is-10');
contentSection.classList.add('section');

navItemTop.innerHTML = 'Todo List App';





//------------------ Mobile Menu Elements --------------------

const navToggle = document.createElement('label');
const emptySpan = document.createElement('span');
const menuToggle = document.createElement('input');
const navRight = document.createElement('div');

const link1Mobile = document.createElement('a');
const link1SpanMobile = document.createElement('span');
const link1IconMobile = document.createElement('i');

const link2Mobile = document.createElement('a');
const link2SpanMobile = document.createElement('span');
const link2IconMobile = document.createElement('i');

const link3Mobile = document.createElement('a');
const link3SpanMobile = document.createElement('span');
const link3IconMobile = document.createElement('i');


navToggle.classList.add('nav-toggle');
navToggle.setAttribute('for','menu-toggle');
menuToggle.setAttribute('type','checkbox');
menuToggle.setAttribute('id','menu-toggle');
menuToggle.classList.add('is-hidden');
navRight.classList.add('nav-right','nav-menu');

link1Mobile.classList.add('nav-item','is-tab','is-hidden-tablet');
link2Mobile.classList.add('nav-item','is-tab','is-hidden-tablet');
link3Mobile.classList.add('nav-item','is-tab','is-hidden-tablet');
link1SpanMobile.classList.add('icon');
link2SpanMobile.classList.add('icon');
link3SpanMobile.classList.add('icon');
link1IconMobile.classList.add('fa','fa-home');
link2IconMobile.classList.add('fa','fa-home');
link3IconMobile.classList.add('fa','fa-home');

//-------------------------------------------------------------
//=============================================================
//-------------------- Full Width Elements --------------------

const mainContent = document.createElement('section');

//------------------- Sidebar ------------------- 

const aside = document.createElement('aside');
const navTitle = document.createElement('p');
const navList = document.createElement('ul');
const navItem1 = document.createElement('li');
const navLink1 = document.createElement('a');
const linkSpan1 = document.createElement('span');
const linkIcon1 = document.createElement('i');
const navItem2 = document.createElement('li');
const navLink2 = document.createElement('a');
const linkSpan2 = document.createElement('span');
const linkIcon2 = document.createElement('i');
const navItem3 = document.createElement('li');
const navLink3 = document.createElement('a');
const linkSpan3 = document.createElement('span');
const linkIcon3 = document.createElement('i');



navTitle.innerHTML = 'Navigation';

mainContent.classList.add('main-content','columns','is-fullheight');
aside.classList.add('column','is-2','is-narrow-mobile','is-fullheight','section','is-hidden-mobile','has-background-black');
navTitle.classList.add('menu-label','is-hidden-touch');
navList.classList.add('menu-list');
navLink1.setAttribute('href','#');
linkSpan1.classList.add('icon');
linkIcon1.classList.add('fa','fa-home');
navLink2.setAttribute('href','#');
linkSpan2.classList.add('icon');
linkIcon2.classList.add('fa','fa-home');
navLink3.setAttribute('href','#');
linkSpan3.classList.add('icon');
linkIcon3.classList.add('fa','fa-home');

linkSpan1.appendChild(linkIcon1);
linkSpan2.appendChild(linkIcon2);
linkSpan3.appendChild(linkIcon3);
linkIcon1.insertAdjacentText('afterend','Home');
linkIcon2.insertAdjacentText('afterend','Home');
linkIcon3.insertAdjacentText('afterend','Home');
navLink1.appendChild(linkSpan1);
navLink2.appendChild(linkSpan2);
navLink3.appendChild(linkSpan3);

navItem1.appendChild(navLink1);
navItem2.appendChild(navLink2);
navItem3.appendChild(navLink3);
navList.appendChild(navItem1);
navList.appendChild(navItem2);
navList.appendChild(navItem3);
aside.appendChild(navTitle);
aside.appendChild(navList);
mainContent.appendChild(aside);

contentSection.appendChild(createItemElement('Take out trash'));
contentSection.appendChild(createItemElement('Do dishes'));
contentSection.appendChild(createItemElement('Clean Bathroom'));
contentSection.appendChild(createItemElement('Take out trash'));
contentSection.appendChild(createItemElement('Do dishes'));
contentSection.appendChild(createItemElement('Clean Bathroom'));
contentSection.appendChild(createItemElement('Take out trash'));
contentSection.appendChild(createItemElement('Do dishes'));
contentSection.appendChild(createItemElement('Clean Bathroom'));
contentSection.appendChild(createItemElement('Take out trash'));
contentSection.appendChild(createItemElement('Do dishes'));
contentSection.appendChild(createItemElement('Clean Bathroom'));
contentSection.appendChild(createItemElement('Take out trash'));
contentSection.appendChild(createItemElement('Do dishes'));
contentSection.appendChild(createItemElement('Clean Bathroom'));

content.appendChild(contentSection);

mainContent.appendChild(content);

const lineBreak = document.createElement('br');

link1SpanMobile.appendChild(link1IconMobile);
link2SpanMobile.appendChild(link2IconMobile);
link3SpanMobile.appendChild(link3IconMobile);
link1Mobile.appendChild(link1SpanMobile);
link2Mobile.appendChild(link2SpanMobile);
link3Mobile.appendChild(link3SpanMobile);
navRight.appendChild(link1Mobile);
navRight.appendChild(link2Mobile);
navRight.appendChild(link3Mobile);
navLeft.appendChild(navItemTop);
menuToggle.appendChild(emptySpan);
menuToggle.appendChild(emptySpan);
menuToggle.appendChild(emptySpan);
container.appendChild(navLeft);
container.appendChild(menuToggle);
container.appendChild(navRight);
nav.appendChild(container);

main.appendChild(nav);
main.appendChild(mainContent);


//------------------------------------------------
//================================================








document.body.appendChild(main);



//=========================Todo List Item==============================

    //-------------Create Elements-------------



    //------------Add CSS Selectors------------



//=====================================================================




//=========================Todo List Item==============================

    //-------------Create Elements-------------



    //------------Add CSS Selectors------------



//=====================================================================




//=========================Todo List Item==============================

    //-------------Create Elements-------------



    //------------Add CSS Selectors------------



//=====================================================================
