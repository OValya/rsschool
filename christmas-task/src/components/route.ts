import Control from '../common/control';

export default class Route extends Control {
  homeLink: Control<HTMLAnchorElement>;
  toysLink: Control<HTMLAnchorElement>;
  treesLink: Control<HTMLAnchorElement>;
  onHome: () => void;
  onToys: () => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'route-box');
  
    this.homeLink = new Control<HTMLAnchorElement>(this.node, 'a', 'link',`Home`);
    this.homeLink.node.href = `#home`;
    this.homeLink.node.onclick = () => { this.onHome() }
    this.toysLink = new Control<HTMLAnchorElement>(this.node, 'a', 'link',`Toys`);
    this.toysLink.node.href = `#toys`
    this.toysLink.node.onclick = () => { this.onToys() }
    this.treesLink = new Control<HTMLAnchorElement>(this.node, 'a', 'link',`Trees`);
    this.treesLink.node.href = `#trees`
  
    
   
  }
}