'use strict';

const buttonGo = document.querySelector('.search__btn');

const url = 'https://api.unsplash.com/photos/random?query=spring&per_page=30&orientation=landscape&client_id=C7MyJoXDDp8cWtTxLstCqMQxOHYalhZ6iZPm4UV3ZLM';
const defaultQuery = 'ocean';
const imagesGrid = document.querySelector('.images__grid');
const searchWord = document.getElementById('srch_word');

async function fetchImages(query = defaultQuery) {
 
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&orientation=landscape&client_id=C7MyJoXDDp8cWtTxLstCqMQxOHYalhZ6iZPm4UV3ZLM`);
    const data = await response.json();
    showImages(data);    
  
}

function showImages(data) {
  
  data.results.forEach(image => {
    const picture = document.createElement('img');
    picture.classList.add('img');
    picture.src = image.urls.regular;
    imagesGrid.appendChild(picture);
  });
}




buttonGo.addEventListener('click', () => {
  fetchImages();
});

searchWord.addEventListener('keydown', pressEnter)

function pressEnter(e) {
  if (e.keyCode === 13) {
    fetchImages();
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  const inputElement = document.getElementById('srch_word');
  if(inputElement) {
      inputElement.focus();
  }
});

  