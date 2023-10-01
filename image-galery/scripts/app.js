'use strict';

const searchWord = document.getElementById('srch_word');
const buttonGo = document.querySelector('.search__btn');
const imagesGrid = document.querySelector('.images__grid');
const defaultQuery = 'random';

fetchImages();

async function fetchImages(query = defaultQuery) { 
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&orientation=landscape&client_id=C7MyJoXDDp8cWtTxLstCqMQxOHYalhZ6iZPm4UV3ZLM`);
    const data = await response.json();
    showPictures(data);  
}

function showPictures(data) {  
  data.results.forEach(image => {
    const picture = document.createElement('img');
    picture.classList.add('img');
    picture.src = image.urls.regular;
    picture.alt = `${searchWord.value} image`;
    imagesGrid.appendChild(picture);
  });
}

function clearPictures() {
  const pictures = imagesGrid.querySelectorAll('img');
  pictures.forEach(img => img.remove());
}

function changePictures() {
  if (searchWord.value) {    
    clearPictures();
    fetchImages(searchWord.value);
  }
}

buttonGo.addEventListener('click', changePictures);

searchWord.addEventListener('keydown', pressEnter);

function pressEnter(e) {
  if (e.keyCode === 13) {
    changePictures();
  }
}  