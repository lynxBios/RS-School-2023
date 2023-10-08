'use strict';

const cards = document.querySelectorAll('.grid__item');

let activeCard = false;
let cardOne;
let cardTwo;
let showTimer = document.getElementById('tmr');
let startBtn = document.getElementById('search');
let minutesNumber = 1 * 60;
let timer;



(function mixCards() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();


function startTimer() {
    timer = setInterval(function () {
        let seconds = minutesNumber % 60;
        let minutes = Math.floor(minutesNumber / 60);

        if (minutesNumber <= 0) {
            clearInterval(timer);
            alert('GAME OVER');
        } else {
            let time = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            showTimer.innerHTML = time;          
        }
        --minutesNumber;
    }, 1000);
}

startBtn.addEventListener('click', function () {
    startTimer();
});

function countMoves() {
    let moves = document.getElementById('moves');
    moves.innerHTML = 0;
}

cards.addEventListener('click', function () {
    countMoves();
})




function turnCard() {
    this.classList.add('turn');

    if (!activeCard) {
        activeCard = true;
        cardOne = this;
        return;
    }

    cardTwo = this;
    activeCard = false;

    compareCards();
}

function compareCards() {
    const cardOneImg = cardOne.querySelector('.front_face').src;
    const cardTwoImg = cardTwo.querySelector('.front_face').src;

    if (cardOneImg === cardTwoImg) {
        cards.forEach(card => {
            if (card === cardOne || card === cardTwo) {
                card.classList.add('match');
            }
        });
    }
}

cards.forEach(card => card.addEventListener('click', turnCard));
