// Код в архиве, сделать таймер. Выбираем время в инпуте и запускаем. На табло должна быть разница между временем которое ввели и которое в момент запуска программы. 

// Получаю доступ к инпуту и кнопке
const btn = document.querySelector('.play-btn');
const inp = document.querySelector('.time-inp');
const timerMain = document.querySelector('.timer__main-clock');
console.log(btn);
console.log(inp);
console.log(timerMain);

const checkSetTime = () => {
// Перевожу данные из инпута в милисекунды
  let milisecInp = inp.valueAsNumber; 
   console.log(milisecInp);

   // Получаю текущее время и перевожу его в милисекунды
  const timeNow = new Date();
  console.log(timeNow); 
  let milisecNow = (timeNow.getHours() * 60 + timeNow.getMinutes()) * 60  * 1000; 
  console.log(milisecNow);

  // Разница между текущим временем и инпутом
  let diffTime = (milisecInp - milisecNow) / 1000;
  console.log(diffTime);

  const showSecond = () => {
    // Получаю секунды, минуты, часы
    let sec = Math.floor(diffTime % 60);
    let min = Math.floor((diffTime / 60) % 60);
    let hour = Math.floor((diffTime / (60 * 60)) % 24);
    console.log(sec);
    console.log(min);
    console.log(hour); 

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    if (hour < 10) {
      hour = `0${hour}`;
    }

    timerMain.innerHTML = `${hour}:${min}:${sec}`;
    diffTime--;

    if (diffTime === 0) {
    console.log(`Останавливаем таймер`)
    clearInterval(timer);
    }    
  };
  let timer = setInterval(showSecond, 1000);
}; 
btn.addEventListener('click', checkSetTime);