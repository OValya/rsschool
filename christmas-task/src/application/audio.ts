//import Control from '../common/control'
import playList from '../playlist'

export default class Music {
   isPlay: boolean;
   audio: HTMLAudioElement;
   //audio: Control<HTMLAudioElement>;
   constructor(isPlay: boolean = false) {
      this.isPlay = isPlay;
      //this.audio = new Control(document.body, 'audio', 'audio');
      this.audio = new Audio();//Control(document.body, 'audio', 'audio');
      //this.audio.src = playList[0].src;
      this.audio.onended = () => {
         this.play();
      }
   }

   play() {
      if (!this.isPlay) {
         const item = Math.floor(Math.random() * 5) + 1;
         this.audio.src = playList[item].src;
         this.isPlay = true;
         //console.log("something!");
         //this.audio.load(); 
         this.audio.play();
         
      }else{
         this.isPlay = false;
         this.audio.pause(); 
         
      }
   }

}

// audio.addEventListener('ended', playNext);

// audio.play();

//    playAudio() {
//       if (this.isPlay) {
//          this.audio.pause();
//          this.isPlay = false;
//       }
//       else {
//          this.audio.play();
//          this.isPlay = true;
//       }
//    }
// }

/*function

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