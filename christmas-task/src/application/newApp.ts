import Control from '../common/control';
//import * as style from './style.css';
import HomePage from './start-page';
import ToysPage from './toys-page';
import TreesPage from './trees-page';
import Route from '../components/route'
import Filter from '../model/filter'
import Page from './page';
import { ToysData, IToysData } from '../model/newDataModel'

interface IPageConstructor {
  new(parentNode: HTMLElement, dataToys?: IToysData[], fiter?: Record<string, Array<string>>): Page;
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

    this.route = new Route(this.node);

    this.pages = {
      '#home': HomePage,
      '#toys': ToysPage,
      '#trees': TreesPage,
    }

    this.model = new ToysData();
    this.dataToys = this.model.loadData();


    this.filterModel = new Filter(this.dataToys);

    //this.route.selectedToys.node.innerText = '5';

    window.onpopstate = this.loadWindow.bind(this);
    this.loadWindow();
  }


  createPage() {
    const filterToys = this.filterModel.filtrateData();
    const filterValues = this.filterModel.filterValues;
    const newPage = new (this.pages[window.location.hash] || HomePage)(this.node, filterToys, filterValues);
    
    newPage.onCheck = (type: string, value: string) => {
      if (this.filterModel.filterValues[type].includes(value)) {
        this.filterModel.removeFilterValue(type, value)
      } else {
        this.filterModel.addFilterValue(type, value);
      }
      newPage.updatePage(this.filterModel.filtrateData());
    }

    newPage.onChange = (type: string, min: string, max: string) => {
      this.filterModel.changeFilterValue(type, min, max);
      newPage.updatePage(this.filterModel.filtrateData());
    }

    newPage.onReset = () => {
      this.filterModel.resetFilter();
      newPage.destroy();
      this.createPage();
    }

    newPage.onSelect = (num:string) => {
      this.filterModel.selectToy(num);
      let counter = this.filterModel.countSelectedToys();
      if(counter > 20) {}
      this.route.selectedToys.node.textContent =  this.filterModel.countSelectedToys().toString(); 
      
      newPage.updatePage(this.filterModel.filtrateData());

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

}
