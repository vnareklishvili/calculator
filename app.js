var seconds = 00;
var tens = 00;
var OutPutSeconds = document.getElementById("sec");
var OutPutTens = document.getElementById("tens");
var buttonStart = document.getElementById("btn_start");
var buttonStop = document.getElementById("btn_stop");
var buttonReset = document.getElementById("btn_reset");
var interval;

buttonStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTime, 10);
});
buttonStop.addEventListener("click", () => {
  clearInterval(interval);
});
buttonReset.addEventListener("click", () => {
  tens = "00";
  seconds = "00";
  OutPutSeconds.innerHTML = seconds;
  OutPutTens.innerHTML = tens;
});

function startTime() {
  tens++;
  if (tens <= 9) {
    OutPutTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    OutPutTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    OutPutSeconds.innerHTML = "0" + seconds;
    tens = 0;
    OutPutTens.innerHTML = "0" + tens;
  }
  if (seconds > 9) {
    OutPutSeconds.innerHTML = seconds;
  }
}
