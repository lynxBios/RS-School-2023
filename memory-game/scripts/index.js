'use strict';

const cards = document.querySelectorAll('.grid__item');
const frontFace = document.querySelector('.front_face');
const backFace = document.querySelector('.back_face');


let activeCard = false;
let cardOne;
let cardTwo;
let showTimer = document.getElementById('tmr');
let startBtn = document.getElementById('search');
let minutesNumber = 1 * 60;
let timer;
let moves = 0;
let showMoves = document.getElementById('mvs');


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

cards.forEach(card => card.addEventListener('click', turnCard));


function countMoves() {
    moves += 1;
    showMoves.innerHTML = moves;    
}
backFace.addEventListener('click', function () {
    countMoves();    
});
frontFace.addEventListener('click', function () {
    countMoves();    
});



function turnCard() {
    this.classList.add('turn');

    if (!activeCard) {
        activeCard = true;
        cardOne = this;        
    } else {
        activeCard = false;
        cardTwo = this;
        compareCards();
    }    
}

function compareCards() {
    const cardOneImg = cardOne.querySelector('.front_face').src;
    const cardTwoImg = cardTwo.querySelector('.front_face').src;

    if (cardOneImg === cardTwoImg) {
        cardOne.removeEventListener('click', turnCard);        
        cardTwo.removeEventListener('click', turnCard);        

        setTimeout(function () {
            cardOne.classList.add('match')
            cardTwo.classList.add('match')
        }, 700);
        
    } else {
        setTimeout(function () {
            cardOne.classList.remove('turn');
            cardTwo.classList.remove('turn');            
        }, 1000);
    }
}


