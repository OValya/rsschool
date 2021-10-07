const TIME = document.querySelector('.time');
const DATE = document.querySelector('.date');
const GREETING = document.querySelector('.greeting');
const NAME = document.querySelector('.name');

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

function getTimeOfDay(h){
    const massiveTimes = ['night', 'morning', 'day', 'evening']
    return massiveTimes[Math.floor(h/6)];
}

function showGreeting(){
    const date = new Date();
    const hour = date.getHours();
    GREETING.textContent = `Good ${getTimeOfDay(hour)}, `;
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



//TIME.textContent = date.getHours() +" "+date.getMinutes()+ " "+ date.getSeconds();