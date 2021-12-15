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

    // const homePage = new HomePage(this.node);
    // homePage.onClick = () => {
    //   const toysPage = new ToysPage(this.node, )
    // }

    this.pages = {
      '#home': HomePage,
      '#toys': ToysPage,
      '#trees': TreesPage,
    }

    this.route = new Route(this.node);
    this.filterModel = new Filter();
    this.filterModel.loadFromLocalstorage();

    this.model = new ToysData();
    this.dataToys = this.model.loadData();

    window.onpopstate = this.loadWindow.bind(this);
    this.loadWindow();
  }


  createPage() {
    const newPage = new (this.pages[window.location.hash] || HomePage)(this.node, this.dataToys);
    newPage.onCheck = (type: string, value: string) => {
      if (this.filterModel.filterValues[type].includes(value)) {
        this.filterModel.removeFilterValue(type, value)
      } else {
        this.filterModel.addFilterValue(type, value);
      }
      console.log('filter', this.filterModel);
      console.log('values', this.filtrate())
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

  filtrate() {
    const arr: Array<IToysData> = [];
    const fil = this.dataToys.map((value) => {
      this.filterModel.filterValues['shape'].forEach(elem => {
        if (value['shape'] == elem) {
          arr.push(value);
        }
      })

    })
    return arr;
  }

}
