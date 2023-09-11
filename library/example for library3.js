
(function registerValidation() {    
    const emailInput = document.querySelector('.email_input');
    const firstNameInput = document.querySelector('.first_name_input');
    const lastNameInput = document.querySelector('.last_name_input');
    const passwordInput = document.querySelector('.password_input');
    const registerButton = document.querySelector('.register__btn');
    
    
    // Добавляем обработчик события клика на кнопку registerButton
    registerButton.addEventListener('click', function(event) {
        alert('Success!');
        event.preventDefault(); // Отменяем действие по умолчанию (отправку формы)
        validateForm(); // Вызываем функцию, которая проверяет введенные данные
    
      // Получаем значения полей ввода
      function validateForm() {
        const firstName = document.querySelector('.first_name_input').value;
        const lastName = document.querySelector('.last_name_input').value;
        const email = document.querySelector('.email_input').value;
        const password = document.querySelector('.password_input').value;
      
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
          alert('Please fill in all required fields.');
          return false;
        }
      
        if (password.length < 8) {
          alert('Password should be at least 8 characters long.');
          return false;
        }
      
        if (!validateEmail(email)) {
          alert('Please enter a valid email address.');
          return false;
        }
      
        return true;
      }
      
      function validateEmail(email) {
        const atIndex = email.indexOf('@');
        const dotIndex = email.lastIndexOf('.');
    
        if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
            return false;
        }
    
        return true;
      }
    
      // Если форма проходит валидацию, вы можете отправить данные на сервер 
      if (validateForm()) {
        saveData(firstNameInput.value, lastNameInput.value, emailInput.value, passwordInput.value);
        generateCardNumber();
        changeInitials();
      }
      function saveData(firstName, lastName, email, password) {
        const userData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        };
      
        localStorage.setItem('userData', JSON.stringify(userData));
      };
    
      function generateCardNumber() {
        const cardNumber = Math.floor(Math.random() * 0xFFFFFFFFF).toString(16).padStart(9, '0');
        return cardNumber;
      }
    
      function changeInitials() {
        const firstNameInput = document.querySelector('.first_name_input');
        const lettersJD = document.querySelector('.letters__jd');
    
        firstNameInput.addEventListener('input', function() {
            const firstName = this.value;
            const initials = firstName.charAt(0).toUpperCase();
    
            lettersJD.textContent = initials;
        });
      }
        
      // Если форма не проходит валидацию, вы можете показать ошибки или препятствовать отправке формы
    
      // После успешной валидации, скрываем модальное окно
      //registerModal.style.display = 'none';  
      registerWindow.classList.remove('modal__register-wrapper_active'); 
    });
    
    }());
    




///////////////////////////////////////////////////////////////////////////////////////
(function registration() {
    
    const registerButton = document.querySelector('.register__btn');
  
    const emailInput = document.querySelector('.email_input');
    const firstNameInput = document.querySelector('.first_name_input');
    const lastNameInput = document.querySelector('.last_name_input');
    const passwordInput = document.querySelector('.password_input');
  
    // Добавляем обработчик события клика на кнопку registerButton
    registerButton.addEventListener('click', function(event) {
      event.preventDefault(); // Отменяем действие по умолчанию (отправку формы)
      if (validateForm()) { //Вызываем функцию, которая проверяет введенные данные      
        generateCardNumber();
        changeInitials();
        saveData(firstNameInput.value, lastNameInput.value, emailInput.value, passwordInput.value);
    });

    function validateForm() {
      const firstName = firstNameInput.value;
      const lastName = lastNameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;
  
      if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all required fields.');
        return false;
      }
  
      if (password.length < 8) {
        alert('Password should be at least 8 characters long.');
        return false;
      }
  
      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
      }  
      
      return true;
    }
  
    function validateEmail(email) {
      const atIndex = email.indexOf('@');
      const dotIndex = email.lastIndexOf('.');
  
      if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
        return false;
      }
  
      return true;
    }

    function saveData(firstName, lastName, email, password, cardNumber) {
        const userData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          cardNumber: generateCardNumber()
        };
    
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    
    function generateCardNumber() {
        const cardNumber = Math.floor(Math.random() * 0xFFFFFFFFF).toString(16).padStart(9, '0').toUpperCase();
        return cardNumber;
      }
  
    function changeInitials() {
      const lettersJD = document.querySelector('.letters__jd');
  
      firstNameInput.addEventListener('input', function() {
        const firstName = this.value;
        const initials = firstName.charAt(0).toUpperCase();
  
        lettersJD.textContent = initials;
      });
    }

    registerWindow.classList.remove('modal__register-wrapper_active');
  
  }());


  ////////////////////////////////////////////////////////////

