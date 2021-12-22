import Control from '../common/control';
import Page from './page';

import CheckForm from '../components/checkbox-form';
import CheckList from '../components/checkbox-list';
import FilterBlock from '../components/filter-block';
import FilterBlockRange from '../components/filter-block-with-ranges'
import { ToysData, IToysData } from '../model/newDataModel';
import toysDataUrl from '../toys-data.json'
import Card from '../components/card'
import CardBox from '../components/card-box';
import SortSelect from '../components/sort-select';
import Fiter from '../model/filter';


export default class ToysPage extends Page {
  filterByValue: FilterBlock;
  onCheck: (type: string, value: string) => void;
  cardBox: CardBox;
  filterByRange: FilterBlockRange;
  onChange: (type:string, min: string, max: string) => void;
  filters: Control<HTMLElement>;
  sortBlock: SortSelect;
  onReset: () => void;
  onSelect: (num:string) => void;
  popup: Control<HTMLElement>;
  buttonPopup: Control<HTMLElement>;
  //updatePage: (filtredData: IToysData[]) => void;
  

  constructor(parentNode: HTMLElement, dataToys: IToysData[], filter: Record<string, Array<string>>) {
    super(parentNode);

    //this.popup = new Control(this.node, 'div', 'popup hide-popup');
    //this.buttonPopup = new Control(this.popup.node, 'button', 'button button-popup', 'Понятно!');


    this.filters = new Control(this.node, 'div', 'filter-section');

    this.filterByValue = new FilterBlock(this.filters.node, 'Фильтр по значению', filter);//, arrayOfFilter)
    this.filterByValue.onCheck = (str: string, value: string) => {
      this.onCheck(str, value);
    }

    this.filterByRange = new FilterBlockRange(this.filters.node, 'Фильтр по диапазону:', filter);
    this.filterByRange.onChange = (type:string, min: string, max: string) => {
      this.onChange(type, min, max)
    }

    this.sortBlock = new SortSelect(this.filters.node);
    this.sortBlock.onClick = () => {
      this.onReset();
    }

    this.cardBox = new CardBox(this.node, dataToys);
    this.cardBox.onSelect = (num:string) => {
      this.onSelect(num);
    }
  }

  updatePage(filtredData: IToysData[]): void {
    //console.log('fdlkfjakl');
    
    let currentBox = this.cardBox;
    currentBox.destroy();
   // this.cardBox.destroy();
    this.cardBox = new CardBox(this.node, filtredData);
    this.cardBox.onSelect = (num:string) => {
      this.onSelect(num);
    }

  }

}