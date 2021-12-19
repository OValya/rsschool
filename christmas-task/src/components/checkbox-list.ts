import Control from '../common/control';
import FormCheck from './checkbox-form';

interface IToyFilterData{
  type: string,
  filterType: string
}

export default class CheckList extends Control{
  onCheck: (type:string, value:string) => void;
  check: FormCheck;
  constructor(parentNode:HTMLElement, title:string, type: string, arrOfFilterValue:Array<IToyFilterData>, checked:string[]){
    super(parentNode, 'div', 'select-block', title);
    arrOfFilterValue.forEach((elem, index) => {
      const checkedValue = (checked.includes(elem.filterType));
      this.check = new FormCheck(this.node, type, elem.type, elem.filterType, checkedValue);
      this.check.onCheck = (type:string, value) =>{
        this.onCheck(type, value);
        //const test = new Control(this.node, 'p','', str)
      }
      //this.node.append(check.node);
  })
}
}


