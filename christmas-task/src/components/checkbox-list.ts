import Control from '../common/control';
import FormCheck from './checkbox-form';

interface IToyFilterData{
  type: string,
  filterType: string
}

export default class CheckList extends Control{
  onCheck: (type:string, value:string) => void;
  constructor(parentNode:HTMLElement, title:string, type: string, arrOfFilterValue:Array<IToyFilterData>){
    super(parentNode, 'div', 'select-block', title);
    arrOfFilterValue.forEach((elem, index) => {
      const check = new FormCheck(this.node, type, elem.type, elem.filterType);
      check.onCheck = (type:string, value) =>{
        this.onCheck(type, value);
        //const test = new Control(this.node, 'p','', str)
      }
      this.node.append(check.node);
  })
}
}


