const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
const containerWelcome = document.querySelector('.welcome-container')
let numberWelcomeImage = 1;
const slideCounter = document.querySelector('.slide-number-counter')

function setNumberSlider(){
  slideCounter.textContent = String(numberWelcomeImage).padStart(2, '0');
}

function setWelcomeImage(){
  containerWelcome.style.background = `linear-gradient(to left, transparent 30%, #030303 70%), url('/assets/img/welcome/${numberWelcomeImage}.jpg') 100% 0% no-repeat`
}
setWelcomeImage();

slidePrev.onclick = () => {
  (numberWelcomeImage===1)?numberWelcomeImage=5:numberWelcomeImage--;
  setWelcomeImage();
  setNumberSlider();
}

slideNext.onclick = () => {
  (numberWelcomeImage===5)?numberWelcomeImage=1:numberWelcomeImage++;
  setWelcomeImage();
  setNumberSlider();
}

let progressVolume = document.querySelector('.progress-volume'); 
progressVolume.addEventListener('input', function() {
  let value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})
 
let progressVideo = document.querySelector('.progress-video'); 
progressVideo.addEventListener('input', function() {
  let value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})