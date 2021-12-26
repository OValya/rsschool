import Control from "../common/control";


export default class SettingPanel extends Control{
  audio: Control<HTMLButtonElement>;
  snowfall: Control<HTMLButtonElement>;
  blockTitle: Control<HTMLElement>;
  onClick: ()=>void;;
  constructor(parentNode:HTMLElement){
    super(parentNode, 'div', 'settings-panel');
    this.blockTitle = new Control(this.node, 'p', 'title-settings-panel', 'Добавьте настроения!')
    this.audio = new Control(this.node, 'button', 'icon-button audio-button');
    this.snowfall = new Control(this.node, 'button', 'icon-button snowfall-button')
    this.snowfall.node.onclick = () => {
      //console.log('snow');
      this.onClick();
    }
  }


}