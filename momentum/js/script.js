const TIME = document.querySelector('.time');
const DATE = document.querySelector('.date');
const GREETING = document.querySelector('.greeting');
const NAME = document.querySelector('.name');
const BODY = document.getElementsByTagName('body')[0]
let randomNum;
const btnSlideNext = document.querySelector('.slide-next')
const btnSlidePrev = document.querySelector('.slide-prev')
const city = document.querySelector('.city')
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const QUOTE = document.querySelector('.quote');
const AUTHOR = document.querySelector('.author');
const changeQUOTE = document.querySelector('.change-quote');

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
    localStorage.setItem('city', city.value)
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage(){
    if(localStorage.getItem('userName')){
        NAME.value=localStorage.getItem('userName');
    }
    if(localStorage.getItem('city')){
        city.value=localStorage.getItem('city');
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

async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=92be861a33f2edd35d1a39fd6838b1a2&units=metric&lang=ru`;
    const res = await fetch(url);
    const data = await res.json(); 
    //console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
    temperature.textContent = data.main.temp +" \u{2103}";
    weatherDescription.textContent = data.weather[0].description;
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
}

city.addEventListener('change', getWeather);
getWeather()

async function getQuote(){
    const src = 'js/quotes.json';
    const res = await fetch(src);
    const quotes = await res.json();
    let randomQuote = Math.ceil(Math.random() * 11);
    //console.log(randomQuote);
    QUOTE.textContent = quotes[randomQuote].quote;
    AUTHOR.textContent = quotes[randomQuote].source;
}

window.addEventListener('load', getQuote);

changeQUOTE.addEventListener('click', getQuote);


