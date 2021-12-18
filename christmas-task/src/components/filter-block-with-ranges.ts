import Control from "../common/control";
import DoubleRange from "./double-range";

export default class FilterBlockRange extends Control {
  public blockTitle: HTMLHeadingElement;
  rangeYears: DoubleRange;
  onChange: (min:string, max: string) => void;
  constructor(parentNode: HTMLElement, title: string /*, arr:Array<CheckList>*/) {
    super(parentNode, 'div', 'filter-block');
    this.blockTitle = document.createElement('h2');
    this.blockTitle.textContent = title;
    this.node.append(this.blockTitle);
    this.rangeYears = new DoubleRange(this.node, '0', '12', '1', '3', '5' );
    this.rangeYears.onChange = (min:string, max:string) =>{
      this.onChange(min, max);
    }
  }
}

