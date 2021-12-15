import Control from '../common/control';
import FormCheck from './checkbox-form';

interface IToyFilterData{
  type: string,
  filterType: string
}

export default class CheckList extends Control{
  constructor(parentNode:HTMLElement, title:string, type: string, arrOfFilterValue:Array<IToyFilterData>){
    super(parentNode, 'div', 'select-block', title);
    arrOfFilterValue.forEach((elem, index) => {
      const check = new FormCheck({ parentNode: this.node, type: type, typeForm:elem.type, typeForFilter:elem.filterType });
      this.node.append(check.node);
  })
}
}


