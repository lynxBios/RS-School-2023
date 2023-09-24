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
}

nextBtn.addEventListener("click", nextSong)

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

prevBtn.addEventListener("click", prevSong)

function updateProgress(e) {
  progressValue = (audio.currentTime / audio.duration) * 100;
  timeline.style.width = `${progressValue}%`;
  let minutes = Math.floor(audio.currentTime / 60);
  let seconds = Math.floor(audio.currentTime % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;    
  }
}

audio.addEventListener("timeupdate", updateProgress);
