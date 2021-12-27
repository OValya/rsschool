import Control from '../common/control';
import { IToysData } from '../model/newDataModel';
import CardBox from '../components/card-box';
import CanvasTrees from './canvas1';

export default class Page extends Control{
  onSelectFon: (img: string) => void;
  onSelectTree: (img: string) => void;
  canvas: CanvasTrees;   ///
  content: any;  ///
  playMusic: () => void;
  updatePage(arg0: IToysData[]) {
    throw new Error('Method not implemented.');
  }

  onCheck: (type:string, value:string) => void;
  onChange: (type:string, min:string, max:string) => void;
  onReset: ()=>void;
  onSelect: (num: string) => void;
  
  constructor(parentNode: HTMLElement, dataToys?:IToysData[], filter?: Record<string, Array<string>>) {
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