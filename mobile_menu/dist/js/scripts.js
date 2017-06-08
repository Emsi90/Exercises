var btn = document.querySelector('.header__hamburger');
var btnIcon = document.querySelector('.header__hamburger-icon');
var slideMenu = document.querySelector('.header__list');

btn.addEventListener('click', function() {
    
    btnIcon.classList.toggle('open');
    slideMenu.classList.toggle('open');
    
}, false);

var submenu = document.querySelector('.header__item--submenu');
var openSubmenu = document.querySelector('.submenu');


submenu.addEventListener('click', function() {

    openSubmenu.classList.toggle('open');
    
}, false);