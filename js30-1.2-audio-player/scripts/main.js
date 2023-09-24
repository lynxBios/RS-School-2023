'use strict';
const audioPlayer = document.querySelector(".audio-player");
const playBtn = document.querySelector(".play-pause");
const pauseBtn = document.querySelector(".pause_hidden");
const prevBtn = document.querySelector(".backward");
const nextBtn = document.querySelector(".forward");
const audio = document.querySelector(".audio");
const timeline = document.querySelector(".timeline");
const progress = document.querySelector(".progress");
const songTitle = document.querySelector(".song_title");
const songImage = document.querySelector(".song_picture");
const imgSource = document.querySelector(".song_img");

const songs = ['Beyonce - Dont Hurt Yourself', 'DuaLipa – Dont Start Now']

let songIndex = 0;

function loadSong(song) {
  songTitle.innerHTML = song;
  audio.src = `./assets/audio/${song}.mp3`;
  imgSource.src = `./assets/img/covers/cover${songIndex}.png`;
}
loadSong(songs[songIndex]);

function playSong() {  
  audio.play();
}

function pauseSong() {  
  audio.pause();
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
    playBtn.classList.add("playing_non_active");
    pauseBtn.classList.remove("pause_hidden");
    
  } else {
    pauseSong();    
  }
})

pauseBtn.addEventListener("click", () => {
  pauseSong();
  pauseBtn.classList.add("pause_hidden");
  playBtn.classList.remove("playing_non_active");
})

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
  playBtn.classList.add("playing_non_active");
  pauseBtn.classList.remove("pause_hidden");
}
nextBtn.addEventListener("click", nextSong)

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
  playBtn.classList.add("playing_non_active");
  pauseBtn.classList.remove("pause_hidden");
}
prevBtn.addEventListener("click", prevSong)



function updateProgress(e) {
  const {duration, currentTime} = e.srcElement
  const progressValue = (currentTime / duration) * 100;

  timeline.style.width = `${progressValue}%`;  
}
audio.addEventListener("timeupdate", updateProgress);



function setProgress(e) {
  const width = this.clientWidth;
  console.log(width);
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}
audioPlayer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);



function timeHandler() {
  const currentElement = document.querySelector('.current');
  const lengthElement = document.querySelector('.length');
  
  // Получаем текущую позицию воспроизведения и общую длительность трека
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  
  // Функция для форматирования времени в формат "минуты:секунды"
  function formatTime(time) {
    if (isNaN(time)) {
      return '0:00';
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  
  // Обновляем текст в элементах с текущим временем и общей длительностью
  currentElement.textContent = formatTime(currentTime);
  lengthElement.textContent = formatTime(duration);
}
audio.addEventListener('timeupdate', timeHandler);