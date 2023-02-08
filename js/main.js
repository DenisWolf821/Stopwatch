// задаем переменные для нахождения полей: часов, минут, секунд и миллисекунд
const hourElement = document.querySelector(".time__hour");
const minuteElement = document.querySelector(".time__minute");
const secondElement = document.querySelector(".time__second");
const millisecondsElement = document.querySelector(".time__milliseconds");

// задаем переменные для нахождения кнопок старт, пауза и сброс
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const resetBtn = document.querySelector("#reset");
const lapBtn = document.querySelector("#lap");

// объявляем переменные для отображения значений временых полей
let hour = 0,
  minute = 0,
  second = 0,
  milliseconds = 0,
  interval,
  number = 0,
  disabled = true;

// Слушатели на клик
startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startStopwatch, 10);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  (hour = 0), (minute = 0), (second = 0), (milliseconds = 0);
  millisecondsElement.textContent = "00";
  secondElement.textContent = "00";
  minuteElement.textContent = "00";
  hourElement.textContent = "00";
  lapBtn.disabled = true;
});
lapBtn.addEventListener("click", () => {
  number++;
  const results = document.querySelector(".results__table");
  const block = document.createElement("div");
  block.setAttribute("class", "results");
  block.innerText = `Интервал ${number} - ${hour > 9 ? hour : "0" + hour}:${
    minute > 9 ? minute : "0" + minute
  }:${second > 9 ? second : "0" + second}:${
    milliseconds > 9 ? milliseconds : "0" + milliseconds
  }`;
  results.append(block);
});

//   задаем функции секундомера
function startStopwatch() {
  //   milliseconds
  milliseconds++;
  if (milliseconds < 9) {
    millisecondsElement.innerText = "0" + milliseconds;
  }
  if (milliseconds > 9) {
    millisecondsElement.innerText = milliseconds;
  }
  if (milliseconds > 99) {
    second++;
    secondElement.innerText = "0" + second;
    milliseconds = 0;
    millisecondsElement.innerText = "0" + milliseconds;
  }

  //   seconds
  if (second < 9) {
    secondElement.innerText = "0" + second;
  }
  if (second > 9) {
    secondElement.innerText = second;
  }
  if (second > 59) {
    minute++;
    minuteElement.innerText = "0" + minute;
    second = 0;
    secondElement.innerText = "0" + second;
  }

  //   minute
  if (minute < 9) {
    minuteElement.innerText = "0" + minute;
  }
  if (minute > 9) {
    minuteElement.innerText = minute;
  }
  if (minute > 59) {
    hour++;
    hourElement.innerText = "0" + hour;
    minute = 0;
    minuteElement.innerText = "0" + minute;
  }

  //   hour
  if (hour < 9) {
    hourElement.innerText = "0" + hour;
  }
  if (hour > 9) {
    hourElement = hour;
  }
  lapBtn.disabled = false;
}
// блокируем кнопку
function disabledBtn() {
  if (disabled) {
    lapBtn.disabled = true;
  }
}
disabledBtn();
