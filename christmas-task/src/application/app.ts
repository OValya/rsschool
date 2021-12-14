import Control from '../common/control';
import * as style from './style.css';
import HomePage from './start-page';
import ToysPage from './toys-page';
import TreesPage from './trees-page';
import Route from '../components/route'

import Page from './page';

interface IPageConstructor{
  new(parentNode: HTMLElement): Page;
}

export default class Application extends Control {
  currentPage: Page;
  route: Route;
  constructor(parentNode: HTMLElement) {
    super(parentNode);

    const pages:Record<string, IPageConstructor> = {
      '#Home': HomePage,
      '#Toys': ToysPage,
      '#Trees': TreesPage,
    }

    this.route = new Route(this.node);

    const updateWindow = () => {
      const createPage = () => {
        const newPage = new (pages[window.location.hash] || HomePage)(this.node);
        this.currentPage = newPage;
      }
      if (this.currentPage) {
        let currentPage = this.currentPage;
          currentPage.destroy();
          createPage();
      }else{
        createPage();
      }
    }
    window.onpopstate = updateWindow;
    updateWindow();
    
   
    
  }
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
