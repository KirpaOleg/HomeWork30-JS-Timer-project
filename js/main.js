// Код в архиве, сделать таймер. Выбираем время в инпуте и запускаем. На табло должна быть разница между временем которое ввели и которое в момент запуска программы. 

// Получаю доступ к инпуту и кнопке
const btn = document.querySelector('.play-btn');
const inp = document.querySelector('input[type="time"]');
// console.log(btn);
// console.log(inp);

// Получаю текущее время и перевожу его в милисекунды
const timeNow = new Date().toLocaleTimeString();
console.log(timeNow); 
let timeNowParts = timeNow.split(":");
// console.log(timeNowParts);
let milisecNow = timeNowParts[0] * (60000 * 60) + (timeNowParts[1] * 60000) + (timeNowParts[2] * 1000); 
// console.log(milisecNow);


btn.addEventListener('click', () => {
// Перевожу данные из инпута в милисекунды
  let inputVal = inp.value; 
  // console.log(inputVal);
  let timeParts = inputVal.split(":");
  // console.log(timeParts);
  let milisecInp = timeParts[0] * (60000 * 60) + (timeParts[1] * 60000); 
  // console.log(milisecInp);

  // Разница между текущим временем и инпутом
  let diffTime = milisecNow - milisecInp;
  // console.log(diffTime);

  // Получаю доступ к таймеру
  let timerMain = document.querySelector('.timer__main-clock');
  // console.log(timerMain);

  // Создаю переменную и присваиваю ей разницу времени
  let clock = diffTime;
  console.log(clock);

  const showSecond = () => {
    // Получаю секунды, минуты, часы
    let sec = Math.floor(clock % 60)
    let min = Math.floor(clock / 60 % 60)
    let hour = Math.floor(clock / 60 / 60 % 60)

    if (clock <= 0) {
    console.log(`Останавливаем таймер`)
    clearInterval(timer);
     } else {
      let timerShow = `${('0' + hour).slice(-2)}:${('0' + min).slice(-2)}:${('0' + sec).slice(-2)}`;
      timerMain.innerText = timerShow;
      console.log(timerShow);
     }
     clock--;
   };

   const timer = setInterval(showSecond, 1000);
}); 
