const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav'); 
const menuNav = document.querySelector('.menu-nav');
const menuItem = document.querySelectorAll('.menu-nav__item');

let showmenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showmenu) {
        burger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuItem.forEach(item => item.classList.add('open'));

        showmenu = true;
    }
    else {
        burger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuItem.forEach(item => item.classList.remove('open'));

        showmenu = false;
    }
}