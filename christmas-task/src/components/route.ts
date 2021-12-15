import Control from '../common/control';

export default class Route extends Control {
  homeLink: Control<HTMLAnchorElement>;
  toysLink: Control<HTMLAnchorElement>;
  treesLink: Control<HTMLAnchorElement>;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'route-box');
  
    this.homeLink = new Control<HTMLAnchorElement>(this.node, 'a', 'link',`Home`);
    this.homeLink.node.href = `#home`;
    this.toysLink = new Control<HTMLAnchorElement>(this.node, 'a', 'link',`Toys`);
    this.toysLink.node.href = `#toys`
    this.treesLink = new Control<HTMLAnchorElement>(this.node, 'a', 'link',`Trees`);
    this.treesLink.node.href = `#trees`
  
    
   
  }
}