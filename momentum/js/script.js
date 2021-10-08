const TIME = document.querySelector('.time');
const DATE = document.querySelector('.date');
const GREETING = document.querySelector('.greeting');
const NAME = document.querySelector('.name');
const BODY = document.getElementsByTagName('body')[0]
let randomNum;
const btnSlideNext = document.querySelector('.slide-next')
const btnSlidePrev = document.querySelector('.slide-prev')


function showTime(){
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    TIME.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
    showGreeting();
}

function showDate(){
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const local = 'ru-RU';
    const currentDate = date.toLocaleDateString(local, options);
    DATE.textContent = currentDate;
}

showTime();

function getTimeOfDay(){
    const date = new Date();
    const hour = date.getHours();
    const massiveTimes = ['night', 'morning', 'day', 'evening']
    return massiveTimes[Math.floor(hour/6)];
}

function showGreeting(){
    GREETING.textContent = `Good ${getTimeOfDay()}, `;
}

function setLocalStorage(){
    localStorage.setItem('userName', NAME.value);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage(){
    if(localStorage.getItem('userName')){
        NAME.value=localStorage.getItem('userName')
    }
}

window.addEventListener('load', getLocalStorage);

function getRandomInt() {
    randomNum = Math.ceil(Math.random() * 20); 
  }

getRandomInt();

function changeBackground(){
    const timeOfDay = getTimeOfDay();
    const numberImg = String(randomNum).padStart(2,'0');
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${numberImg}.jpg`;
    img.onload = ()=>{
        BODY.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${numberImg}.jpg')`;
    }
}  

changeBackground();

function getSlideNext(){
    (randomNum===20)?randomNum=1:randomNum++
    changeBackground();
}

function getSlidePrev(){
   if (randomNum===1) {randomNum=20} else {randomNum--};
   changeBackground();
}

btnSlideNext.addEventListener('click', getSlideNext);
btnSlidePrev.addEventListener('click', getSlidePrev);





