import Control from "../common/control";
import DoubleRange from "./double-range";

export default class FilterBlockRange extends Control {
  public blockTitle: HTMLHeadingElement;
  rangeYears: DoubleRange;
  onChange: (type:string, min:string, max: string) => void;
  rangeCount: DoubleRange;
  constructor(parentNode: HTMLElement, title: string, filter:Record<string, Array<string>> /*, arr:Array<CheckList>*/) {
    super(parentNode, 'div', 'filter-block');

    this.blockTitle = document.createElement('h2');
    this.blockTitle.textContent = title;
    this.node.append(this.blockTitle);

    this.rangeCount = new DoubleRange(this.node, 'count', '0', '12', '1', filter['count'][0], filter['count'][1]);
    let event = new Event('input');
    this.rangeCount.inputUp.node.dispatchEvent(event);
    this.rangeCount.inputDown.node.dispatchEvent(event);
    this.rangeCount.onChange = (type:string, min:string, max:string) =>{
      this.onChange(type, min, max);
    }

    this.rangeYears = new DoubleRange(this.node, 'year', '1940', '2020', '10', filter['year'][0], filter['year'][1]);
    this.rangeYears.inputUp.node.dispatchEvent(event);
    this.rangeYears.inputDown.node.dispatchEvent(event);
    this.rangeYears.onChange = (type:string, min:string, max:string) =>{
      this.onChange(type, min, max);
    }
  }
}

