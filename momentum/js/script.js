import playList from './playList.js';
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
const WIND = document.querySelector('.wind');
const HUMIDITY = document.querySelector('.humidity');
const QUOTE = document.querySelector('.quote');
const AUTHOR = document.querySelector('.author');
const changeQUOTE = document.querySelector('.change-quote');
const AUDIO = document.querySelector('audio');
let isPlay = false;
const PLAY = document.querySelector('.play');
const btnPlayPREV = document.querySelector('.play-prev')
const btnPlayNEXT = document.querySelector('.play-next')
let numPlay = 0;
const PLAYLIST = document.querySelector('.play-list');
const LANGUAGE = document.querySelector('.language');
let isRussian = true;


//----------------дата-время-----------------

function showTime(){
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    TIME.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
    showGreeting();  
}

function showDate(){
    let local;
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    if(isRussian) local = 'ru-RU';
    else local = 'en-EN';
    const currentDate = date.toLocaleDateString(local, options);
    DATE.textContent = currentDate;
}

showTime();

function getTimeOfDay(){
    const date = new Date();
    const hour = date.getHours();
    const massiveTimes = ['night', 'morning', 'afternoon', 'evening']
    return massiveTimes[Math.floor(hour/6)];
}


//-----------приветствие-------------------

function showGreeting(){
    if(!isRussian) {
        GREETING.textContent = `Good ${getTimeOfDay()}, `;
    }
    else{
        switch (getTimeOfDay()) {
            case 'night':
                GREETING.textContent = 'Доброй ночи, ';
                break;
            case 'afternoon':
                GREETING.textContent = 'Добрый день, ';
                break;
            case 'morning':
                GREETING.textContent = 'Доброе утро, ';
                break;
            case 'evening':
                GREETING.textContent = 'Добрый вечер, ';
                break;
            default:
                break;
        }
    }
}

function getName(){
    if(!localStorage.getItem('userName')){
        (isRussian)?NAME.value='Незнакомец':NAME.value='Stranger';
    } else {NAME.value=localStorage.getItem('userName');}
}

NAME.addEventListener('change', setUserNametoLocalStorage);

function setUserNametoLocalStorage(){
  localStorage.setItem('userName', NAME.value);  
}

function setCityToLocalStorage(){
    localStorage.setItem('city', city.value);
}

function getCity(){
    console.log(localStorage.getItem('city'));
    if(localStorage.getItem('city')||localStorage.getItem('city')==='')
        {city.value=localStorage.getItem('city');}
    else {(isRussian)?city.value='Минск':NAME.value='Minsk';} 
}
getName();
getCity();
/*
function getLocalStorage(){
    getName();
    getCity();
}

window.addEventListener('load', getLocalStorage);
//window.addEventListener('load', setName);
*/

//---------------фон--------------------------


function getRandomInt() {
    randomNum = Math.ceil(Math.random() * 20); 
  }

getRandomInt();

function changeBackground(){
    const timeOfDay = getTimeOfDay();
    const numberImg = String(randomNum).padStart(2,'0');
    const img = new Image();
    //BODY.style.backgroundColor = "#000000"
    img.src = `https://raw.githubusercontent.com/OValya/stage1-tasks/assets/images/${timeOfDay}/${numberImg}.jpg`;
    img.onload = ()=>{
        BODY.style.backgroundImage = `url('${img.src}')`;
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


//---------------image API---------------------
//-----------flickr
/*async function getImageAPI(){
    const tag = 'outdoor';
    const url =  `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ba3a5977285474bbc874bea7cdf167bc&tags=${tag}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    const bg = new Image();
    
    bg.src = data.photos.photo[0].url_l; 
    bg.onload = ()=>{
        BODY.style.background = `url(${bg.src}) 0 0/cover no-repeat `;

        
    }
    
} */



//-----------Unsplash
async function getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=morning&client_id=zIUtuSsMRo0XlHKB6bBp_akSfrXMKWcgp-QYw1v4YMw';
    const res = await fetch(url);
    const data = await res.json();
    const bg = new Image();
    bg.src = data.urls.regular;
    console.log(bg.src);
    bg.onload = ()=>
    {
        BODY.style.background = `url(${bg.src}) 0 0/cover`;
    }
}
    
//getLinkToImage();

//-----------------погода----------------------
async function getWeather() {  
    let languageOption;
    if(isRussian) {languageOption='ru'}
    else{languageOption='en'}
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=92be861a33f2edd35d1a39fd6838b1a2&units=metric&lang=${languageOption}`;
    try {
        const res = await fetch(url);
        const data = await res.json(); 
        //console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
        temperature.textContent = Math.round(data.main.temp) +" \u{2103}";
        weatherDescription.textContent = data.weather[0].description;
        if(isRussian){ 
            WIND.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
            HUMIDITY.textContent =`Влажность: ${data.main.humidity} %`;
        }else{
            WIND.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
            HUMIDITY.textContent =`Humidity: ${data.main.humidity} %`;
        }
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        
    } catch (error) {
        weatherDescription.textContent = "Error: enter correct city!";
        temperature.textContent ='';
        WIND.textContent ='';
        HUMIDITY.textContent = '';
        weatherIcon.classList.add(`owf-962`);
        
    }
   /* 
    if(res.ok){
        const data = await res.json(); 
        //console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
        temperature.textContent = Math.round(data.main.temp) +" \u{2103}";
        weatherDescription.textContent = data.weather[0].description;
        if(isRussian){ 
            WIND.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
            HUMIDITY.textContent =`Влажность: ${data.main.humidity} %`;
        }else{
            WIND.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
            HUMIDITY.textContent =`Humidity: ${data.main.humidity} %`;
        }
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    } else{
        weatherDescription.textContent = "Error: enter correct city!";
        temperature.textContent ='';
        WIND.textContent ='';
        HUMIDITY.textContent = '';
        weatherIcon.classList.add(`owf-962`);

    } */
}

getWeather();

city.addEventListener('change', changeCity);

function changeCity(){
   getWeather();
   setCityToLocalStorage(); 
}



//-------------цитаты-------------

async function getQuote(){
    let srcQuete;
    if(isRussian) {srcQuete  = 'js/quotes_RU.json';}
    else {srcQuete = 'js/quotes_En.json'}
    const res = await fetch(srcQuete);
    const quotes = await res.json();
    let randomQuote = Math.ceil(Math.random() * 11);
    //console.log(randomQuote);
    QUOTE.textContent = quotes[randomQuote].quote;
    AUTHOR.textContent = quotes[randomQuote].source;
}

window.addEventListener('load', getQuote);

changeQUOTE.addEventListener('click', getQuote);


//-----------audio--------

function playAudio(){
   AUDIO.currentTime = 0;
   if(isPlay){AUDIO.pause(); isPlay = false; PLAY.classList.remove('pause')}
   else {AUDIO.play(); isPlay = true; PLAY.classList.add('pause')}
}

//function togglePlay(){
 //   PLAY.classList.toggle('pause')
//}

PLAY.addEventListener('click', playAudio);

function changePlay(){
   AUDIO.currentTime = 0;
   AUDIO.src = playList[numPlay].src;
   AUDIO.play(); 
   isPlay = true; 
   PLAY.classList.add('pause');
}
function playNext(){
    if(numPlay===playList.length-1) {numPlay=0;}
    else numPlay++; 
    changePlay();
}
function playPrev(){
    if(numPlay===0) {numPlay=playList.length-1;}
    else numPlay--; 
    changePlay();
}


btnPlayNEXT.addEventListener('click', playNext);
btnPlayPREV.addEventListener('click', playPrev);

//console.log(playList[1].src);

playList.forEach(el => {
    const LI = document.createElement('li');
    LI.classList.add('.play-item');
    LI.textContent = el.title;
    PLAYLIST.append(LI);
})

//-------change language----------


LANGUAGE.addEventListener('click', changeLanguage);

function changeLanguage(){
    if(isRussian){isRussian=false; LANGUAGE.value='RU'}
    else {isRussian=true;LANGUAGE.value='EN'}
    showGreeting();
    showDate();
    getQuote();
    getWeather();
    setName();
   // changeDefaultCity();
    
    
}

//------------------------


