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

    this.model = new ToysData();
    this.dataToys = this.model.loadData();


    this.filterModel = new Filter(this.dataToys);  
 
    window.onpopstate = this.loadWindow.bind(this);
    this.loadWindow();
  }


  createPage() {
    const filterToys = this.filterModel.filtrateData();
    const newPage = new (this.pages[window.location.hash] || HomePage)(this.node, filterToys);
    
    newPage.onCheck = (type: string, value: string) => {
      if (this.filterModel.filterValues[type].includes(value)) {
        this.filterModel.removeFilterValue(type, value)
      } else {
        this.filterModel.addFilterValue(type, value);
      }
      newPage.updatePage(this.filterModel.filtrateData());
    }

    newPage.onChange = (min, max) => {
      this.filterModel.changeFilterValue('count', min, max);
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
