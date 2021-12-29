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
         this.audio.play();
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

