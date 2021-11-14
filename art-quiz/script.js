const iconSettings = document.querySelector('.settings-icon');
const containerSettings = document.querySelector('.settings-page');
const minusTime = document.querySelector('.minus');
const plusTime = document.querySelector('.plus');
const timerValue = document.querySelector('.timer-value');


iconSettings.addEventListener('click', (e) => {
   // console.log('gjkhlkj;jkg');
    containerSettings.classList.toggle('_show');
    //setOptionVisibility();
    
});



minusTime.addEventListener('click', (e) => {
    timerValue.stepDown(); 
    //timerValue.onchange();
})

plusTime.addEventListener('click', (e)=>{
    timerValue.stepUp(); 
    //timerValue.onchange();
})