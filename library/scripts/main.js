// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__navigation');
    const menuCloseItem = document.querySelector('.header__nav-close')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__navigation-active');
        
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__navigation-active');
    })
}());