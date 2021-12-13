import Control from '../common/control';
import FormCheck from './checkbox-form';

export default class CheckList extends Control{
  constructor(parentNode:HTMLElement, title:string, type: string, arrOfFilterValue:Array<string>){
    super(parentNode, 'div', 'select-block', title);
    arrOfFilterValue.forEach((elem, index) => {
      const check = new FormCheck({ parentNode: this.node, type: type, typeForm:elem });
      this.node.append(check.node);
  })
}
}


