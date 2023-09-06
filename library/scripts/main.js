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


// profile ico no auth handler

(function () {
    const headerIco= document.querySelector('.header__ico');
    const dropMenuNoAuth = document.querySelector('.drop_menu_no_auth');

    headerIco.addEventListener('click', () => {
        dropMenuNoAuth.classList.toggle('drop_menu_no_auth_active');
    });
}());

// profile ico with auth handler

(function () {
    const profileIco= document.querySelector('.ico__after_auth');
    const dropMenuWithAuth = document.querySelector('.drop_menu_with_auth');

    profileIco.addEventListener('click', () => {
        dropMenuWithAuth.classList.toggle('drop_menu_with_auth_active');
    });
}());

// Login handler
(function () {
    const login = document.querySelector('.log_in');
    const loginWindow = document.querySelector('.modal__log_in-wrapper');
    const loginClose = document.querySelector('.modal__close_btn');
    const register = document.querySelector('.register');
    const registerWindow = document.querySelector('.modal__register-wrapper');
    const registerClose = document.querySelector('.close_register_btn');

    login.addEventListener('click', () => {
        loginWindow.classList.add('modal__log_in-wrapper_active');        
    });

    loginClose.addEventListener('click', () => {
        loginWindow.classList.remove('modal__log_in-wrapper_active');
    });

    register.addEventListener('click', () => {
        registerWindow.classList.add('modal__register-wrapper_active');        
    });

    registerClose.addEventListener('click', () => {
        registerWindow.classList.remove('modal__register-wrapper_active');
    });

}());



/* этот код помечает картинки, для удобства разработки */
let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* конфигурация */
let carousel = document.querySelector('.carousel');
let width = 130; // ширина картинки
let count = 3; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};