/*function playAudio(){
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
})*/