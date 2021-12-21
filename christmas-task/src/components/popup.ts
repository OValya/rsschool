import Control from '../common/control';

export default class Popup extends Control{
  popupBody: Control<HTMLElement>;
  popupMessage: Control<HTMLElement>;
  popupButton: Control<HTMLElement>;
  constructor(parentNode:HTMLElement, text:string){
    super(parentNode, 'div', 'popup hidden-popup')
    this.popupBody = new Control(this.node, 'div', 'popup-body');
    this.popupMessage = new Control(this.popupBody.node, 'p', 'popup-message', text);
    this.popupButton = new Control(this.popupBody.node, 'button', 'button popup-button', 'Понятно!');
  }
}