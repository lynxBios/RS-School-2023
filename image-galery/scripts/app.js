'use strict';

const button = document.querySelector('.search__btn');
const image = document.querySelector('.image');
const url = 'https://api.unsplash.com/photos/?client_id=C7MyJoXDDp8cWtTxLstCqMQxOHYalhZ6iZPm4UV3ZLM';

const searchResults = document.querySelector('.search-results');


async function fetchImages() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    image.src = data.file
    console.log(data)
  } catch (error) {
    console.log(error);
  }
  
}
button.addEventListener('click', () => {
  fetchImages();
});
  