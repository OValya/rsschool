import Control from '../common/control';
import Page from './page';

import CheckForm from '../components/checkbox-form';
import CheckList from '../components/checkbox-list';
import FilterBlock from '../components/filter-block';
import {ToysData, IToysData} from '../dataModel';
import toysDataUrl from '../toys-data.json'
import Card from '../components/card'
import CardBox from '../components/card-box'

const forms = [{type:'ball', filterType:'шар'}, 
               {type:'bell', filterType:'колокольчик'},
               {type:'toy', filterType:'игрушка'},
               {type:'snowflake', filterType:'снежинка'},
               {type:'cone', filterType:'сосулька'}
              ];
const color = [{type:'white', typeFilter:'белый'},
               {type:'red', typeFilter: 'красный'},
               {type:'blue', typeFilter: 'синий'},
               {type:'yellow', typeFilter:'желтый'},
               {type:'green', typeFilter: 'зеленый'}
              ];
const size = ['big', 'medium', 'small'];
const favorite = ['favorite'];

export default class ToysPage extends Page {
  // formFilter: CheckList;
  // colorFilter: CheckList;
  // sizeFilter: CheckList;
  // favoriteFilter: CheckList;
  filterByValue: FilterBlock;
  onCheck: (type:string, value:string) => void;
  cardBox: CardBox;
  constructor(parentNode: HTMLElement, dataToys: IToysData[]) {
    super(parentNode);
    //this.formFilter = new CheckList(document.body, 'Форма:', 'form', forms);
   // this.colorFilter = new CheckList(document.body, 'Цвет:', 'color', color);
    //this.sizeFilter = new CheckList(document.body, 'Размер:', 'size', size);
    //this.favoriteFilter = new CheckList(document.body, 'Только любимые:', 'favorite', favorite);

    // let arrayOfFilter: Array<CheckList> = [this.formFilter];//, this.colorFilter, this.sizeFilter, this.favoriteFilter];
    this.filterByValue = new FilterBlock(this.node, 'Фильтр по значению');//, arrayOfFilter)
    this.filterByValue.onCheck = (str:string, value:string) => {
      //const test = new Control(this.node, 'p','', str)
      this.onCheck(str, value);
    }
   // console.log(data);
   console.log('page', dataToys)

   this.cardBox = new CardBox(this.node, dataToys);
   //const cardBox = new CardBox(this.node, data);
   
    // const data = new ToysData();
    // data.build().then(result => {
    //   new CardBox(this.node, result.data)
    // });

  }

  updatePage(filtredData:IToysData[]): void{
    this.cardBox.destroy();
    this.cardBox = new CardBox(this.node, filtredData);
  }
}