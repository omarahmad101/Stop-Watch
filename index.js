const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);
}

function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
    (seconds > 9 ? seconds : "0" + seconds) + ":" +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  timerEl.textContent = "00:00:00:00";
}

startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);
