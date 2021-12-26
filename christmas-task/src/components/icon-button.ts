import Control from "../common/control";

export default class IconButton extends Control{
  constructor(parentNode:HTMLElement, extClass:string){
    super(parentNode, 'button', 'icon-button');
    this.node.classList.add(extClass);
  }
}