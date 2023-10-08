'use strict';

const cards = document.querySelectorAll('.grid__item');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));
