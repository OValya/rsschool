import Control from '../common/control'

export default class FormCheck extends Control {
  //onCheck: (type:string)=> void;
  private labelCheck: Control<HTMLLabelElement>;
  public inputCheck: Control<HTMLInputElement>;
  //public valueForFilter: string;
  onCheck: (type:string, value:string) => void;
  type: string;
  value: string;
  constructor(parentNode: HTMLElement, type: string, typeForm: string, typeForFilter:string, checked:boolean) {
    super(parentNode, 'label', `checkbox ${typeForm} ${type}`);
    this.type = type;
    this.value = typeForFilter;
    /*this.labelCheck = new Control(this.node, 'label', 'checkbox', '');
    this.labelCheck.node.classList.add(typeForm);
    this.labelCheck.node.classList.add(type);*/
    //this.valueForFilter = typeForFilter
    this.inputCheck = new Control(this.node, 'input');
    this.inputCheck.node.type = 'checkbox';
    this.inputCheck.node.checked = checked;
    //this.labelCheck.node.append(this.inputCheck.node);
    this.inputCheck.node.onchange = () => {
        this.onCheck(type, typeForFilter);
    }
  }
}


