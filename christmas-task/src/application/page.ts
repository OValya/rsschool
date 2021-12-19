import Control from '../common/control';
import { IToysData } from '../model/newDataModel';
import CardBox from '../components/card-box';

export default class Page extends Control{
  onCheck: (type:string, value:string) => void;
  onChange: (type:string, min:string, max:string) => void;
  onReset: ()=>void;
  constructor(parentNode: HTMLElement, dataToys?:IToysData[]) {
    super(parentNode, 'div', 'page'); //style.page);
  }

  updatePage(filtredData:IToysData[]): void{
    const data = new CardBox(this.node, filtredData);
  }

  // setFilter(filter:Record<string, Array<string>>):void{

  // }
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