'use strict';

const searchForm = document.getElementById('search-form');
const searchInput = searchForm.querySelector('[type="search"]');
const searchResults = document.querySelector('.search-results');


// напишем обработчик события ввода с клавиатуры в поле поиска
searchInput.addEventListener('input', (e) => {
    // Получаем значение в поле,
    // на котором сработало событие:
    const { value } = e.target
  
    // Получаем список imgs от сервера:
    server.search(value).then(function (response) {
      const { list } = response
  
      // Проходим по каждому из элементов списка,
      // и составляем строчку с несколькими <li> элементами...
      const html = list.reduce((markup, item) => {
        return `${markup}<li>${item}</li>`
      }, ``)
  
      // ...которую потом используем как содержимое списка:
      searchResults.innerHTML = html
    })
  })
  