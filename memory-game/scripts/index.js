'use strict';

const cards = document.querySelectorAll('.grid__item');
const frontFace = document.querySelector('.front_face');
const backFace = document.querySelector('.back_face');
const startBtn = document.getElementById('search');
const resetBtn = document.getElementById('play_again');

let activeCard = false;
let cardOne;
let cardTwo;
let showTimer = document.getElementById('tmr');
let minutesNumber = 1 * 60;
let timer;
let moves = 0;
let showMoves = document.getElementById('mvs');
let blockField = true;


function mixCards() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
};

function startTimer() {
    blockField = false;
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
    mixCards();
    startTimer();    
});

function stopTimer() {
    clearInterval(timer);        
}

function resetTimer() {
    minutesNumber = 1 * 60;
    showTimer.innerHTML = '1:00';
}

cards.forEach(card => card.addEventListener('click', turnCard));


function countMoves() {
    if (blockField === true) {
        return;
    }
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
    if (blockField === true) {
        return;
    }

    if (this === cardOne) {
        return;
    }    

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
            youWin();
        }, 700);        
    } else {       
        blockField = true;
        setTimeout(function () {
            cardOne.classList.remove('turn');
            cardTwo.classList.remove('turn');
            blockField = false;            
        }, 1000);
    }    
}

const youWin = () => {
    if (document.querySelectorAll('.match').length === 12) {
        stopTimer();
        setTimeout(function () {
            alert('YOU WIN!');
        }, 300)            
    }
  };

function resetVariables() {
    activeCard = false;
    blockField = true;    
    cardOne = null;
    cardTwo = null;
  }

function resetMoves() {
    moves = 0;
    showMoves.innerHTML = moves;
}

function resetGame() {
    document.location.reload()        
    //resetField();    
    //resetMoves();
    //stopTimer();    
    //mixCards();
    //resetVariables();            
}
resetBtn.addEventListener('click', resetGame);



function resetField() {
    const turnedCard = document.querySelectorAll('.turn');
    const matchedCard = document.querySelectorAll('.match');
    if (turnedCard) {
        turnedCard.forEach(card => card.classList.remove('turn'));
    }   
    if (matchedCard) {
        matchedCard.forEach(card => card.classList.remove('match'));
    }    
}





