import Control from '../common/control';
import { IToysData } from '../dataModel';

export default class Page extends Control{
  constructor(parentNode: HTMLElement, dataToys?:IToysData[]) {
    super(parentNode, 'div', 'page'); //style.page);
  }
/*
  animateIn() {
    return new Promise(resolve => {
      this.node.ontransitionend = () => {
        resolve(null);
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.node.style.transform = 'scale(1,1)';
        })
      })      
    })    
  }

  animateOut() {
    return new Promise(resolve => {
      this.node.style.transform = 'scale(0,0)';
      this.node.ontransitionend = () => {
        resolve(null);
      }
    });
  }
  */
}