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
  new(parentNode: HTMLElement, dataToys?:IToysData[]): Page;
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

    this.pages = {
      '#Home': HomePage,
      '#Toys': ToysPage,
      '#Trees': TreesPage,
    }

    this.route = new Route(this.node);
    // let dataToys:Array<IToysData> = [];
    this.filterModel = new Filter();
    this.filterModel.loadFromLocalstorage();

    this.model = new ToysData();
    this.dataToys = this.model.loadData();
    
    // this.allData.build().then((result: IToysData[]) => {
    //   this.dataToys = result
    //   console.log(this.dataToys);
    //   this.loadWindow();
    // });
    // .then(() => {

    //    this.loadWindow();
    // });

    window.onpopstate = this.loadWindow.bind(this);
    this.loadWindow();

    // const createPage = () => {
    //     console.log(this.dataToys);
    //     const newPage = new (pages[window.location.hash] || HomePage)(this.node);
    //     this.currentPage = newPage;
    //   }

    //
  }
  createPage() {
    console.log('test', this.dataToys);
    const newPage = new (this.pages[window.location.hash] || HomePage)(this.node, this.dataToys);
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

  //(window as any).onpopstate = this.loadWindow;
  //this.loadWindow();

}




/*
class ToysPage extends Page{
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const title = new Control(this.node, 'h1', 'settings-page', 'Toys');
  }
}

class TreesPage extends Page{
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const title = new Control(this.node, 'h1', 'trees-page', 'Trees');
  }
}
*/