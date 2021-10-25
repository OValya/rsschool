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
const iconSettings = document.querySelector('.settings-icon');
const containerSettings = document.querySelector('.settings-container');
const dateVisibility = document.getElementById('date-cb');
const timeVisibility = document.getElementById('time-cb');
const weatherVisibility = document.getElementById('weather-cb');
const greetingVisibility = document.getElementById('greeting-cb');
const quoteVisibility = document.getElementById('quote-cb');
const playerVisibility = document.getElementById('player-cb');
const PLAYER = document.querySelector('.player');
const nameAndGreeting = document.querySelector('.greeting-container');
const WEATHER = document.querySelector('.weather');
const optionVisibility = document.querySelector('.visible-option');
const optionLanguage = document.querySelector('.language-option');
const optionPhotos = document.querySelector('.photos-options');
const containerVisibilityValues = document.querySelector('.settings-values-visibility');
const containerLanguageValues = document.querySelector('.settings-values-language')
const containerPhotosValues = document.querySelector('.settings-values-photos');
const languageRussian = document.getElementById('value-russian');
const languageEnglish = document.getElementById('value-engish');
const settingsCheck = document.querySelectorAll('.check');
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
        (isRussian)?NAME.value='[Введите ваше имя]':NAME.value='[Enter your name]';
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
    let randomQuote = Math.floor(Math.random() * 11);
    console.log(randomQuote);
    QUOTE.textContent = quotes[randomQuote].quote;
    AUTHOR.textContent = quotes[randomQuote].source;
}

window.addEventListener('load', getQuote);

changeQUOTE.addEventListener('click', getQuote);


//-----------audio--------

function playAudio(){
   //AUDIO.currentTime = 0;
   if(isPlay){AUDIO.pause(); isPlay = false; PLAY.classList.remove('pause')}
   else {AUDIO.play(); isPlay = true; PLAY.classList.add('pause')}
}

PLAY.addEventListener('click', playAudio);

function changePlay(){
   AUDIO.currentTime = 0;
   AUDIO.src = playList[numPlay].src;
   AUDIO.play(); 
   isPlay = true; 
   PLAY.classList.add('pause');
  // PLAYLIST.childNodes[numPlay].classList.add('_sound');
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
    LI.classList.add('play-item');
    LI.textContent = el.title;
    PLAYLIST.append(LI);
})

//-------change language----------


LANGUAGE.addEventListener('click', changeLanguage);

function changeLanguage(){
    if(isRussian){isRussian=false; LANGUAGE.value='RU';}
    else {isRussian=true;LANGUAGE.value='EN'}
    setRbtnLanguage();
    showGreeting();
    showDate();
    getQuote();
    getWeather();
    setSettingsLanguage();
   // setName();
   // changeDefaultCity();  
}

function setSettingsLanguage(){
    if(isRussian){
        optionLanguage.textContent = 'Язык приложения';
        optionPhotos.textContent = 'Изображения';
        optionVisibility.textContent = 'Виджеты';
       // settingsCheck[0].innerText = 'Время';

    }else{
        optionLanguage.textContent = 'Language';
        optionPhotos.textContent = 'Photos';
        optionVisibility.textContent = 'Visibility';

    }
}
setSettingsLanguage();
//------------settings

iconSettings.addEventListener('click', (e) => {
    containerSettings.classList.toggle('_show');
    setOptionVisibility();
    
});

function setOptionVisibility(){
    if(!optionVisibility.classList.contains('._active')){
        optionVisibility.classList.add('_active');
        optionLanguage.classList.remove('_active');
        optionPhotos.classList.remove('_active');
        containerVisibilityValues.classList.remove('_inactive');
        containerPhotosValues.classList.add('_inactive');
        containerLanguageValues.classList.add('_inactive');
       }
}

optionVisibility.addEventListener('click', setOptionVisibility);

optionPhotos.addEventListener('click', (e)=>{
    if(!optionPhotos.classList.contains('._active')){
         optionVisibility.classList.remove('_active');
         optionLanguage.classList.remove('_active');
         optionPhotos.classList.add('_active');
         containerVisibilityValues.classList.add('_inactive');
         containerPhotosValues.classList.remove('_inactive');
         containerLanguageValues.classList.add('_inactive');
        }
});

optionLanguage.addEventListener('click', (e)=>{
    if(!optionLanguage.classList.contains('._active')){
         optionVisibility.classList.remove('_active');
         optionLanguage.classList.add('_active');
         optionPhotos.classList.remove('_active');
         containerVisibilityValues.classList.add('_inactive');
         containerPhotosValues.classList.add('_inactive');
         containerLanguageValues.classList.remove('_inactive');
        setRbtnLanguage();
    }
});

function setRbtnLanguage(){
    if(isRussian) {languageRussian.checked = 'true';}
        else {languageEnglish.checked='true';}
}

dateVisibility.addEventListener('change', (e) => {
    if(dateVisibility.checked) {DATE.classList.remove('_hidden');}
    else {DATE.classList.add('_hidden');}
});
timeVisibility.addEventListener('change', (e) => {
    if(timeVisibility.checked) {TIME.classList.remove('_hidden');}
    else {TIME.classList.add('_hidden');}
});
playerVisibility.addEventListener('change', (e) => {
    if(playerVisibility.checked) {PLAYER.classList.remove('_hidden');}
    else {PLAYER.classList.add('_hidden');}
});
greetingVisibility.addEventListener('change', (e) => {
    if(greetingVisibility.checked) {nameAndGreeting.classList.remove('_hidden');}
    else {nameAndGreeting.classList.add('_hidden');}
});
weatherVisibility.addEventListener('change', (e) => {
    if(weatherVisibility.checked) {WEATHER.classList.remove('_hidden');}
    else {WEATHER.classList.add('_hidden');}
});
quoteVisibility.addEventListener('change', (e) => {
    if(quoteVisibility.checked) {
        QUOTE.classList.remove('_hidden'); 
        AUTHOR.classList.remove('_hidden'); 
        changeQUOTE.classList.remove('_hidden'); 
    }
    else {
        QUOTE.classList.add('_hidden'); 
        AUTHOR.classList.add('_hidden'); 
        changeQUOTE.classList.add('_hidden'); }
});

languageRussian.addEventListener('change', changeLanguage);
languageEnglish.addEventListener('change', changeLanguage);



//------------------------

console.log(`Ваша оценка - 101.5 балла 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем 

2) после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. 

3) добавлен прогресс-бар в котором отображается прогресс проигрывания 

4) при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека 

5) над прогресс-баром отображается название трека 

6) отображается текущее и общее время воспроизведения трека 

7) есть кнопка звука при клике по которой можно включить/отключить звук 

8) добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука 

9) можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте 

10) в качестве источника изображений может использоваться Unsplash API 

11) в качестве источника изображений может использоваться Flickr API 

12) в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API 

13) если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото 

14) настройки приложения сохраняются при перезагрузке страницы 

15) ToDo List - список дел (как в оригинальном приложении) или Список ссылок (как в оригинальном приложении) или Свой собственный дополнительный функционал, по сложности аналогичный предложенным 

Частично выполненные пункты:
1) переводятся настройки приложения, при переключении языка приложения в настройках, язык настроек тоже меняется 

Выполненные пункты:
1) время выводится в 24-часовом формате, например: 21:01:00 

2) время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) 

3) выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" 

4) текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток 

5) пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется 

6) ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз 

7) изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.Изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) 

8) изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) 

9) при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения 

10) при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage 

11) для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел 

12) выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) 

13) при загрузке страницы приложения отображается рандомная цитата и её автор 

14) при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) 

15) при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause 

16) при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play 

17) треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) 

18) переводится язык и меняется формат отображения даты 

19) переводится приветствие и placeholder 

20) переводится прогноз погоды в т.ч описание погоды и город по умолчанию 

21) переводится цитата дня т.е цитата отображается на текущем языке приложения. Сама цитата может быть другая 

22) в настройках приложения можно указать язык приложения (en/ru или en/be)  

23) в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал 

24) Скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их 

`);
