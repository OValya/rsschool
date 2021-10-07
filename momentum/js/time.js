const TIME = document.querySelector('.time');
const DATE = document.querySelector('.date');

function showTime(){
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    TIME.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
}

function showDate(){
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const local = 'ru-RU';
    const currentDate = date.toLocaleDateString(local, options);
    DATE.textContent = currentDate;
}

showTime();





//TIME.textContent = date.getHours() +" "+date.getMinutes()+ " "+ date.getSeconds();