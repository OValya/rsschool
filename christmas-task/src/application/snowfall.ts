import Control from "../common/control";


export default class Snowfall extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'span', 'snowflakes', '&#10052')
    //this.node.style.width = Math.random() * 10 + 10 + "px";
    //this.node.style.width = Math.random() * 10 + 20 + "px";
    this.node.style.left = Math.random() * (window.innerWidth - 100) + "px";
    this.node.style.animationDuration = Math.random() * 3 + 2 + "s";
    this.node.style.opacity = Math.random().toString();
    setTimeout(() => {
      this.destroy();
    },1000)
  }

}






// setInterval(createSnowflake, 100);