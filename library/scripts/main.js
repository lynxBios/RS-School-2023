// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__navigation');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuCloseMain = document.querySelector('.main');
    const menuLinks = document.querySelectorAll('.header__link');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__navigation-active');        
    });

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__navigation-active');
    });
    
    menuCloseMain.addEventListener('click', () => {
        menu.classList.remove('header__navigation-active');
    });
    
    for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', () => {
            menu.classList.remove('header__navigation-active');
        });
    }
}());


// 