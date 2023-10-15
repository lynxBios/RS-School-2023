'use strict';

const cards = document.querySelectorAll('.grid__item');
const frontFace = document.querySelector('.front_face');
const backFace = document.querySelector('.back_face');
const startBtn = document.getElementById('go_button');
const resetBtn = document.getElementById('play_again');
const form = document.querySelector('.form__wrapper');
const scoreGrid = document.querySelector('.score__grid');

let activeCard = false;
let cardOne;
let cardTwo;
let showTimer = document.getElementById('tmr');
let minutesNumber = 1 * 60;
let timer;
let moves = 0;
let showMoves = document.getElementById('mvs');
let blockField = true;
let user = {
    gameNumber: 0,
    name: '',
    moves: 0,
    time: ''
}



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
            recordGameResults();
            showGameResults();
                      
            alert('GAME OVER');
        } else {
            let time = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            showTimer.innerHTML = time;          
        }
        --minutesNumber;
    }, 1000);
}

form.addEventListener('submit', function (startBtn) {
    startBtn.preventDefault();    
})

startBtn.addEventListener('click', function () {
    startBtn.classList.add('started');    
    mixCards();
    startTimer();
    gameCounter();
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
        }, 400);        
    } else {       
        blockField = true;
        setTimeout(function () {
            cardOne.classList.remove('turn');
            cardTwo.classList.remove('turn');
            blockField = false;            
        }, 1000);
    }    
}

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
    //document.location.reload();           
    resetField();       
    resetMoves();
    resetTimer();    
    mixCards();
    resetVariables();
    startBtn.classList.remove('started');
    
    cards.forEach(card => card.addEventListener('click', turnCard));                
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

const youWin = () => {
    if (document.querySelectorAll('.match').length === 12) {
        stopTimer();
        user.moves = moves;
        user.time = showTimer.innerHTML;
        recordGameResults();
        showGameResults();             

        setTimeout(function () {
            alert('YOU WIN!');            
        }, 300)                   
    }
};

function Player(name, time, moves, gameNumber) {
    this.name = name;
    this.time = time;
    this.moves = moves;
    this.gameNumber = gameNumber;    
}

function recordGameResults() {
    let name = form.name.value;
    let time = user.time;    
    let gameNumber = user.gameNumber;
    let gamer = new Player(name, time, moves, gameNumber);

    localStorage.setItem(gameNumber.toString(), JSON.stringify(gamer));
    
    let keys = Object.keys(localStorage);
    if (keys.length > 10) {        
        keys.sort((a, b) => parseInt(a) - parseInt(b));        
        localStorage.removeItem(keys[0]);
        setTimeout(function () {
            document.location.reload();
        }, 900);        
    }

    let data = {};
    keys.forEach(key => {
        data[key] = JSON.parse(localStorage.getItem(key));
        
    });    
}

function showGameResults() {        
    buildScoreTable();
}

function buildScoreTable() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        data[key] = value;
    }

    if (data !== "" && data !== null) {
        createScoreItem();        
    } else {
        fetchData();
    }       
}

function fetchData() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        data[key] = value;
    }

    if (Object.keys(data).length > 0) {
        
        for (const key in data) {
            const gameData = data[key];
            
            createScoreItem(gameData);
        }
    } else {
        

        createScoreItem()
    }
}

function createScoreItem() {    
    const scoreItemWrapper = document.createElement('div');
    scoreItemWrapper.classList.add('score_item__wrapper');
    scoreGrid.appendChild(scoreItemWrapper);

    const boxPlace = document.createElement('div');
    boxPlace.classList.add('box_place');
    boxPlace.id = 'sc_ttls';
    boxPlace.innerHTML = user.gameNumber;
    scoreItemWrapper.appendChild(boxPlace);

    const boxName = document.createElement('div');
    boxName.classList.add('box_name');
    boxName.id = 'sc_nm';
    boxName.innerHTML = form.name.value;
    scoreItemWrapper.appendChild(boxName);

    const boxScore = document.createElement('div');
    boxScore.classList.add('box_score');
    boxScore.id = 'sc_mvs';
    boxScore.innerHTML = user.moves;
    scoreItemWrapper.appendChild(boxScore);

    const boxTime = document.createElement('div');
    boxTime.classList.add('box_time');
    boxTime.id = 'sc_tm';
    boxTime.innerHTML = user.time;
    scoreItemWrapper.appendChild(boxTime);
}



function gameCounter() {
    let counterOfGames = localStorage.getItem('counterOfGames');
    if (counterOfGames) {
        counterOfGames = parseInt(counterOfGames) + 1;
    } else {
        counterOfGames = 1;
    }
    localStorage.setItem('counterOfGames', counterOfGames);
    user.gameNumber = counterOfGames;
}