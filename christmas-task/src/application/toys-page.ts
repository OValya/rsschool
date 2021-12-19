import Control from '../common/control';
import Page from './page';

import CheckForm from '../components/checkbox-form';
import CheckList from '../components/checkbox-list';
import FilterBlock from '../components/filter-block';
import FilterBlockRange from '../components/filter-block-with-ranges'
import { ToysData, IToysData } from '../newDataModel';
import toysDataUrl from '../toys-data.json'
import Card from '../components/card'
import CardBox from '../components/card-box'
import Fiter from '../filter';


export default class ToysPage extends Page {
  filterByValue: FilterBlock;
  onCheck: (type: string, value: string) => void;
  cardBox: CardBox;
  filterByRange: FilterBlockRange;
  onChange: (type:string, min: string, max: string) => void;

  constructor(parentNode: HTMLElement, dataToys: IToysData[], filter: Record<string, Array<string>>) {
    super(parentNode);
    this.filterByValue = new FilterBlock(this.node, 'Фильтр по значению', filter);//, arrayOfFilter)
    //this.setFilter(filter);
    //console.log('filter', filter);
    this.filterByValue.onCheck = (str: string, value: string) => {
      this.onCheck(str, value);
    }

    this.filterByRange = new FilterBlockRange(this.node, 'Фильтр по диапазону:', filter);

    this.filterByRange.onChange = (type:string, min: string, max: string) => {
      this.onChange(type, min, max)
    }

    this.cardBox = new CardBox(this.node, dataToys);
  }

  updatePage(filtredData: IToysData[]): void {
    this.cardBox.destroy();
    this.cardBox = new CardBox(this.node, filtredData);
  }

}