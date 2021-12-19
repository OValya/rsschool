import Control from '../common/control';
import CheckList from './checkbox-list';

const forms = [
  { type: 'ball', filterType: 'шар' },
  { type: 'bell', filterType: 'колокольчик' },
  { type: 'toy', filterType: 'фигурка' },
  { type: 'snowflake', filterType: 'снежинка' },
  { type: 'cone', filterType: 'шишка' }
];
const color = [
  { type: 'white', filterType: 'белый' },
  { type: 'red', filterType: 'красный' },
  { type: 'blue', filterType: 'синий' },
  { type: 'yellow', filterType: 'желтый' },
  { type: 'green', filterType: 'зелёный' }
];
const size = [
  { type: 'big', filterType: 'большой' },
  { type: 'medium', filterType: 'средний' },
  { type: 'small', filterType: 'малый' },
];

const favorite = ['favorite'];


export default class FilterBlock extends Control {
  public blockTitle: HTMLHeadingElement;
  onCheck: (type: string, value: string) => void;
  formFilter: CheckList;
  colorFilter: CheckList;
  sizeFilter: CheckList;
  //public filters: HTMLDivElement[];
  constructor(parentNode: HTMLElement, title: string, filter:Record<string, Array<string>> /*, arr:Array<CheckList>*/) {
    super(parentNode, 'div', 'filter-block');
    this.blockTitle = document.createElement('h2');
    this.blockTitle.textContent = title;
    this.node.append(this.blockTitle);

    this.formFilter = new CheckList(this.node, 'Форма:', 'shape', forms, filter['shape']);

    this.formFilter.onCheck = (str: string, value: string) => {
      //const test = new Control(this.node, 'p','', str)
      this.onCheck(str, value);
    }
    this.colorFilter = new CheckList(this.node, 'Цвет:', 'color', color, filter['color']);
    this.colorFilter.onCheck = (str: string, value: string) => {
      //const test = new Control(this.node, 'p','', str)
      this.onCheck(str, value);
    }
    this.sizeFilter = new CheckList(this.node, 'Размер:', 'size', size, filter['size']);
    this.sizeFilter.onCheck = (str: string, value: string) => {
      //const test = new Control(this.node, 'p','', str)
      this.onCheck(str, value);
    }
  }
}

