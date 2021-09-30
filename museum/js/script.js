//$(document).ready(function(){
   // $('.slick').slick();
//});

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