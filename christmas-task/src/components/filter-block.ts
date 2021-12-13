import Control from '../common/control';
import CheckList from './checkbox-list';

export default class FilterBlock extends Control{
  public blockTitle: HTMLHeadingElement;
  //public filters: HTMLDivElement[];
  constructor(parentNode:HTMLElement, title:string, arr:Array<CheckList>){
    super(parentNode, 'div', 'filter-block');
    this.blockTitle = document.createElement('h2');
    this.blockTitle.textContent = title;
    this.node.append(this.blockTitle);
    arr.forEach(element => {
      this.node.append(element.node);
    });
  }
}

// class FilterBlock<HTMLElement> {
//   constructor(title:string, filters: Array<HTMLElement> ){
//     const element = document.createElement('div');


//   }
// }