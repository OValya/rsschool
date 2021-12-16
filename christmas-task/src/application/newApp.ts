import Control from '../common/control';
//import * as style from './style.css';
import HomePage from './start-page';
import ToysPage from './toys-page';
import TreesPage from './trees-page';
import Route from '../components/route'
import Filter from '../filter'
import Page from './page';
import { ToysData, IToysData } from '../newDataModel'

interface IPageConstructor {
  new(parentNode: HTMLElement, dataToys?: IToysData[]): Page;
}

export default class Application extends Control {
  currentPage: Page;
  route: Route;
  filterModel: Filter;
  model: ToysData;
  dataToys: IToysData[];
  pages: Record<string, IPageConstructor>;

  constructor(parentNode: HTMLElement) {
    super(parentNode);

    const route = new Route(this.node);

    this.pages = {
      '#home': HomePage,
      '#toys': ToysPage,
      '#trees': TreesPage,
    }

    this.filterModel = new Filter();
    this.filterModel.loadFromLocalstorage();

    this.model = new ToysData();
    this.dataToys = this.model.loadData();

    window.onpopstate = this.loadWindow.bind(this);
    this.loadWindow();
  }


  createPage() {
    const newPage = new (this.pages[window.location.hash] || HomePage)(this.node, this.filteredData());
    newPage.onCheck = (type: string, value: string) => {
      if (this.filterModel.filterValues[type].includes(value)) {
        this.filterModel.removeFilterValue(type, value)
      } else {
        this.filterModel.addFilterValue(type, value);
      }
      newPage.updatePage(this.filteredData());
      //this.loadWindow();
      console.log('filter', this.filterModel);
      console.log('values', this.filteredData())
    }
    this.currentPage = newPage;

  }
  loadWindow() {
    if (this.currentPage) {
      let currentPage = this.currentPage;
      currentPage.destroy();
      this.createPage();
    } else {
      this.createPage();
    }
  }


  filteredData() {
    let arr: Array<IToysData> = [];
    let arr2: Array<IToysData> = [];
    let arr3: Array<IToysData> = [];


    if (this.filterModel.filterValues['shape'].length == 0 &&
      this.filterModel.filterValues['color'].length == 0 &&
      this.filterModel.filterValues['size'].length == 0) {
      arr3 = this.dataToys;
    } else {
      if (this.filterModel.filterValues['shape'].length) {
        arr = this.dataToys.filter(value =>
          !!this.filterModel.filterValues['shape'].includes(value['shape']))
      } else {arr = this.dataToys}
      if (this.filterModel.filterValues['color'].length) {
        arr2 = arr.filter(value =>
          !!this.filterModel.filterValues['color'].includes(value['color']))
      } else { arr2 = arr };
      if (this.filterModel.filterValues['size'].length) {
        arr3 = arr2.filter(value =>
          !!this.filterModel.filterValues['size'].includes(value['size']))
      } else { arr3 = arr2 };

      // this.dataToys.map((value) => {
      //   if(this.filterModel.filterValues['shape'].length==0)
      //   this.filterModel.filterValues['shape'].forEach(elem => {
      //     if (value['shape'] == elem) {
      //       arr1.push(value);
      //     }
      //   });
      // })
    }
    console.log('shape', arr3);
    // var arr1 = [1,2,3,4],
    // arr2 = [2,4],
    // res = arr1.filter(item => !arr2.includes(item));

    return arr3;
  }



}
