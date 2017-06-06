var btn = document.querySelector('.header__hamburger');
var btnIcon = document.querySelector('.header__hamburger-icon');
var slideMenu = document.querySelector('.header__list');

btn.addEventListener('click', function() {
    
    btnIcon.classList.toggle('open');
    slideMenu.classList.toggle('open');
    
}, false);