const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

//Play
$play.addEventListener("click", handlePlay);
function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("Play");
}

//Pause
$pause.addEventListener("click", handlePause);
function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  console.log("Pause");
}

//Backward
$backward.addEventListener("click", handleBackward);
function handleBackward() {
  $video.currentTime -= 10;
  console.log("Atrás 10 segundos", $video.currentTime);
}

//Forward
$forward.addEventListener("click", handleForward);
function handleForward() {
  $video.currentTime += 10;
  console.log("Adelante 10 segundos", $video.currentTime);
}

//progress bar
const $progress = document.querySelector("#progress");

//player progress
$video.addEventListener("loadedmetadata", handleLoaded);

//time update
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
  $progress.max = $video.duration;
  console.log("El video Carga", $video.duration);
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  console.log("Holi");
}

//Flujo de la barra
$progress.addEventListener("input", handleInput);
function handleInput() {
  $video.currentTime = $progress.value;
  console.log($progress.value);
}
