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
  { type: 'green', filterType: 'зеленый' }
];
const size = [
  { type: 'big', filterType: 'большой' },
  { type: 'medium', filterType: 'средний' },
  { type: 'small', filterType: 'маленький' },
];

const favorite = ['favorite'];


export default class FilterBlock extends Control {
  public blockTitle: HTMLHeadingElement;
  onCheck: (type: string, value: string) => void;
  formFilter: CheckList;
  colorFilter: CheckList;
  sizeFilter: CheckList;
  //public filters: HTMLDivElement[];
  constructor(parentNode: HTMLElement, title: string /*, arr:Array<CheckList>*/) {
    super(parentNode, 'div', 'filter-block');
    this.blockTitle = document.createElement('h2');
    this.blockTitle.textContent = title;
    this.node.append(this.blockTitle);

    this.formFilter = new CheckList(this.node, 'Форма:', 'shape', forms);

    this.formFilter.onCheck = (str: string, value: string) => {
      //const test = new Control(this.node, 'p','', str)
      this.onCheck(str, value);
    }
    this.colorFilter = new CheckList(this.node, 'Цвет:', 'color', color);
    this.colorFilter.onCheck = (str: string, value: string) => {
      //const test = new Control(this.node, 'p','', str)
      this.onCheck(str, value);
    }
    this.sizeFilter = new CheckList(this.node, 'Размер:', 'size', size);
    this.sizeFilter.onCheck = (str: string, value: string) => {
      //const test = new Control(this.node, 'p','', str)
      this.onCheck(str, value);
    }

    // this.colorFilter = new CheckList(document.body, 'Цвет:', 'color', color);
    //this.sizeFilter = new CheckList(document.body, 'Размер:', 'size', size);
    //this.favoriteFilter = new CheckList(document.body, 'Только любимые:', 'favorite', favorite);

    //let arrayOfFilter: Array<CheckList> = [this.formFilter];//, this.colorFilter, this.sizeFilter, this.favoriteFilter];



    // arr.forEach(element => {
    //   this.node.append(element.node);
    // });
  }
}

// class FilterBlock<HTMLElement> {
//   constructor(title:string, filters: Array<HTMLElement> ){
//     const element = document.createElement('div');


//   }
// }