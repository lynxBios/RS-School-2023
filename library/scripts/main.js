'use strict';


(function burgerHandler() {
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
    };
}());


// profile ico no auth handler
(function callLoginRegisterMenu() {
    const headerIco= document.querySelector('.header__ico');
    const dropMenuNoAuth = document.querySelector('.drop_menu_no_auth');
    const menuCloseMain = document.querySelector('.main');
    const login = document.querySelector('.log_in');    
    const register = document.querySelector('.register');

    headerIco.addEventListener('click', () => {
        dropMenuNoAuth.classList.toggle('drop_menu_no_auth_active');
    });

    login.addEventListener('click', () => {
        dropMenuNoAuth.classList.remove('drop_menu_no_auth_active');
    });

    register.addEventListener('click', () => {
        dropMenuNoAuth.classList.remove('drop_menu_no_auth_active');
    });

    menuCloseMain.addEventListener('click', () => {
        dropMenuNoAuth.classList.remove('drop_menu_no_auth_active');
    });
}());


// profile ico with auth handler
(function callProfileLogoutMenu() {
    const profileIco= document.querySelector('.ico__after_auth');
    const dropMenuWithAuth = document.querySelector('.drop_menu_with_auth');
    const menuCloseMain = document.querySelector('.main');
    const myProfileAuth = document.querySelector('.my_profile');
    const logOut = document.querySelector('.logout');

    profileIco.addEventListener('click', () => {
        dropMenuWithAuth.classList.toggle('drop_menu_with_auth_active');
    });

    menuCloseMain.addEventListener('click', () => {
        dropMenuWithAuth.classList.remove('drop_menu_with_auth_active');
    });

    myProfileAuth.addEventListener('click', () => {
        dropMenuWithAuth.classList.remove('drop_menu_with_auth_active');
    });   
}());


// Login/Register switch handler
(function callLoginRegisterWindow() {
    const login = document.querySelector('.log_in');
    const loginFromLibraryCards = document.querySelector('.log__in');
    const loginWindow = document.querySelector('.modal__log_in-wrapper');
    const loginClose = document.querySelector('.modal__close_btn');
    const loginCloseOverlay = document.querySelector('.modal__log_in-overlay');
    const registerInLoginWindow = document.querySelector('.item_2');
    const register = document.querySelector('.register');
    const registerFromLibraryCards = document.querySelector('.sign__up');
    const registerWindow = document.querySelector('.modal__register-wrapper');
    const registerClose = document.querySelector('.close_register_btn');
    const registerCloseOverlay = document.querySelector('.modal__register-overlay');
    const loginInRegisterWindow = document.querySelector('.register_handler');

    login.addEventListener('click', () => {
        loginWindow.classList.add('modal__log_in-wrapper_active');        
    });
    
    loginFromLibraryCards.addEventListener('click', () => {
        loginWindow.classList.add('modal__log_in-wrapper_active');
    })

    loginClose.addEventListener('click', () => {
        loginWindow.classList.remove('modal__log_in-wrapper_active');
    });
    
    loginCloseOverlay.addEventListener('click', () => {
        loginWindow.classList.remove('modal__log_in-wrapper_active');
    })

    registerInLoginWindow.addEventListener('click', () => {
        registerWindow.classList.add('modal__register-wrapper_active');
        loginWindow.classList.remove('modal__log_in-wrapper_active');
    });

    register.addEventListener('click', () => {
        registerWindow.classList.add('modal__register-wrapper_active');        
    });

    registerFromLibraryCards.addEventListener('click', () => {
        registerWindow.classList.add('modal__register-wrapper_active');
    })

    registerClose.addEventListener('click', () => {
        registerWindow.classList.remove('modal__register-wrapper_active');
    });

    registerCloseOverlay.addEventListener('click', () => {
        registerWindow.classList.remove('modal__register-wrapper_active');
    });

    loginInRegisterWindow.addEventListener('click', () => {
        loginWindow.classList.add('modal__log_in-wrapper_active');
        registerWindow.classList.remove('modal__register-wrapper_active');
    });
}());



// My profile/Log out handler
(function callProfilelogoutWindow() {
    const myProfile = document.querySelector('.my_profile');
    const profileWindow = document.querySelector('.modal__profile-wrapper');
    const profileClose = document.querySelector('.profile__close_btn');
    const profileCloseOverlay = document.querySelector('.modal__profile-overlay');

    const logOut = document.querySelector('.log_out');
    const dropMenuWithAuth = document.querySelector('.drop_menu_with_auth');
    const icoAuthorised = document.querySelector('.ico__after_auth');
    const icoBeforeAuth = document.querySelector('.header__ico');

    myProfile.addEventListener('click', () => {
        profileWindow.classList.add('modal__profile-wrapper_active');
    });

    profileClose.addEventListener('click', () => {
        profileWindow.classList.remove('modal__profile-wrapper_active');
    });

    profileCloseOverlay.addEventListener('click', () => {
        profileWindow.classList.remove('modal__profile-wrapper_active');
    });

    logOut.addEventListener('click', () => {
        dropMenuWithAuth.classList.remove('drop_menu_with_auth_active');
        icoAuthorised.classList.remove('ico__after_auth_active');
        icoBeforeAuth.classList.remove('header__ico_no_active');      
    });
}());

// Call My profile window from Library card section handler
(function callProfileWindow() {
    const myProfile = document.querySelector('.profile__auth');
    const profileWindow = document.querySelector('.modal__profile-wrapper');
    const profileClose = document.querySelector('.profile__close_btn');
    const profileCloseOverlay = document.querySelector('.modal__profile-overlay');

    myProfile.addEventListener('click', () => {
        profileWindow.classList.add('modal__profile-wrapper_active');
    });

    profileClose.addEventListener('click', () => {
        profileWindow.classList.remove('modal__profile-wrapper_active');
    });

    profileCloseOverlay.addEventListener('click', () => {
        profileWindow.classList.remove('modal__profile-wrapper_active');
    });
    
}());











// Register validation handler
function validation(form) {
    

    function removeError(input) {
        const formControl = input.parentNode;

        if (formControl.classList.contains('error')) {
            formControl.querySelector('.error-label').remove();
            formControl.classList.remove('error');
        }
    }

    function createError(input, message) {
        const formControl = input.parentNode;
        const errorLabel = document.createElement('label');

        errorLabel.classList.add('error-label');        
        errorLabel.textContent = message; 

        formControl.classList.add('error');

        formControl.append(errorLabel);        
    }

    let result = true;
    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {

        removeError(input);

        if (input.dataset.minLength) {
            if (input.value < 8) {
                console.log('input is empty');
                createError(input, 'Minimal length is 8 symbols');
                result = false;
            }
        }

        if (input.dataset.required === "true") {
            if (input.value == "") {
                console.log('input is empty');
                createError(input, 'This field is required');
                result = false;
            }
        }
        
        
    }

    return result;

}

document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const registerWindow = document.querySelector('.modal__register-wrapper');    
    const registerSubmit = document.querySelector('.register__btn');
    const headerIco = document.querySelector('.header__ico');
    const profileIco = document.querySelector('.ico__after_auth');

    const libraryCardBeforeAuth = document.querySelector('.lib-card__before_auth');
    const libraryCardAuthorised = document.querySelector('.lib-card__after_auth');
    

    registerSubmit.addEventListener('click', () => {
        registerWindow.classList.remove('modal__register-wrapper_active');
        switchLibraryCardSection()            
    });    
    

    if (validation(this) === true) {
        //alert('Form is valid!');        
        
        // сменить иконку профиля
        headerIco.classList.add('header__ico_no_active');
        profileIco.classList.add('ico__after_auth_active');

        libraryCardBeforeAuth.classList.add('lib-card__before_auth_no_active');
        libraryCardAuthorised.classList.add('lib-card__after_auth_active');
            
           

        // сгенерировать cardNumber
        
        // отправить данные в localStorage
        // сменить инициалы в иконке профиля
        
    }    
});







// login handler
(function loginHandler() {
    const icoBeforeAuth = document.querySelector('.header__ico');
    const icoAuthorised = document.querySelector('.ico__after_auth');
    const loginButton = document.querySelector('.login__btn');
    const libraryCardBeforeAuth = document.querySelector('.lib-card__before_auth');
    const libraryCardAuthorised = document.querySelector('.lib-card__after_auth');


    
    loginButton.addEventListener('click', () => {
        icoBeforeAuth.classList.add('header__ico_no_active');
        icoAuthorised.classList.add('ico__after_auth_active');
       
        libraryCardBeforeAuth.classList.add('lib-card__before_auth_no_active');
        
        libraryCardAuthorised.classList.add('lib-card__after_auth_active');
        
    });
}());



// logout handler
(function logoutHandler() {
    const logOut = document.querySelector('.log_out');
    const dropMenuWithAuth = document.querySelector('.drop_menu_with_auth');
    const icoAuthorised = document.querySelector('.ico__after_auth');
    const icoBeforeAuth = document.querySelector('.header__ico');
    const libraryCardBeforeAuth = document.querySelector('.lib-card__before_auth');
    const libraryCardAuthorised = document.querySelector('.lib-card__after_auth');

    logOut.addEventListener('click', () => {
        dropMenuWithAuth.classList.remove('drop_menu_with_auth_active');
        icoAuthorised.classList.remove('ico__after_auth_active');
        icoBeforeAuth.classList.remove('header__ico_no_active');
        libraryCardBeforeAuth.classList.remove('lib-card__before_auth_no_active');
        libraryCardAuthorised.classList.remove('lib-card__after_auth_active');
    })
})





(function carousel() {
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

}());