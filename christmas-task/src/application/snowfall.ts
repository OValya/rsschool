import Control from "../common/control";


export default class Snowfall{
  isSnow: boolean = false;
  snow: NodeJS.Timer;
  

  run(){
    this.snow = setInterval(this.create, 100);
    this.isSnow = true;
  }

  stop(){
    clearInterval(this.snow);
    this.isSnow = false;
  }

  play() {
    if (!this.isSnow) {
      
       this.isSnow = true;
       //console.log("something!");
       //this.audio.load(); 
       this.snow = setInterval(this.create, 100);
       
    }else{
       this.isSnow = false;
       clearInterval(this.snow);
       
    }
 }

  create(){
    new Snowflake(document.body)
  }

}



class Snowflake extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'span', 'snowflakes', '&#10052')
    //this.node.style.width = Math.random() * 10 + 10 + "px";
    //this.node.style.width = Math.random() * 10 + 20 + "px";
    this.node.style.left = Math.random() * (window.innerWidth - 50) + "px";
    this.node.style.animationDuration = Math.random() * 3 + 2 + "s";
    this.node.style.opacity = Math.random().toString();
    setTimeout(() => {
      this.destroy();
    },2000)
  }

}

//const snowfall = new Snowfall(document.body);




// setInterval(createSnowflake, 100);