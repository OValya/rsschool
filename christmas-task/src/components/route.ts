import Control from '../common/control';

export default class Route extends Control {
  homeLink: Control<HTMLAnchorElement>;
  toysLink: Control<HTMLAnchorElement>;
  treesLink: Control<HTMLAnchorElement>;
  selectedToys: Control<HTMLDivElement>;
 // onHome: () => void;
//  onToys: () => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'route-box');
  
    this.homeLink = new Control<HTMLAnchorElement>(this.node, 'a', 'link',`Главная`);
    this.homeLink.node.href = `#home`;
    //this.homeLink.node.onclick = () => { this.onHome() }
    this.toysLink = new Control<HTMLAnchorElement>(this.node, 'a', 'link',`Игрушки`);
    this.toysLink.node.href = `#toys`
   // this.toysLink.node.onclick = () => { this.onToys() }
    this.treesLink = new Control<HTMLAnchorElement>(this.node, 'a', 'link',`Ёлочки`);
    this.treesLink.node.href = `#trees`

    

    this.selectedToys = new Control(this.node, 'div', 'selected-toys-counter', '0');
  
  }
}