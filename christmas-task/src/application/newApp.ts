import Control from '../common/control';
//import * as style from './style.css';
import HomePage from './start-page';
import ToysPage from './toys-page';
import TreesPage from './trees-page';
import Route from '../components/route'
import Filter from '../model/filter'
import Page from './page';
import { ToysData, IToysData } from '../model/newDataModel';
import Popup from '../components/popup';
import Footer from '../components/footer';
import CanvasTrees from './canvas1'
import Music from './audio'
import Snowfall from '../application/snowfall'

export interface IData {
  filterToys?: IToysData[],
  filterValues?: Record<string, Array<string>>,
  selectedToys?: IToysData[]
}

interface IPageConstructor {
  new(parentNode: HTMLElement, data: IData/*dataToys?: IToysData[], fiter?: Record<string, Array<string>>*/): Page;
}

export default class Application extends Control {
  currentPage: Page;
  route: Route;
  filterModel: Filter;
  model: ToysData;
  dataToys: IToysData[];
  pages: Record<string, IPageConstructor>;
  popup: Popup;
  footer: Footer;
  music: Music;
  snow: Snowfall;
  // isMusicPlay: boolean = false;
  // popupNotToys: Popup;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main-container');
    console.log(`
    1. [+30] есть верстка, страница с елками, есть навигация
    2. [+40] есть смена фона, смена ёлок, музыка, снег 
    3. [ 0 ] нет гирлянды 
    4. [+60]  есть выбранные игрушки, 
              если нет, то первые 20, 
              можно тянуть, 
              только на ёлку, 
              есть количество игрушек,
              можно перевесить и убрать, но моргает(работаю над этим)
    5. [0] нет доп функционала 
    
    
    130/220`)


    this.route = new Route(this.node);

    this.popup = new Popup(this.node, 'Больше нельзя добавить игрушек!');
    // this.popupNotToys = new Popup(this.node, 'Игрушек с выбранными параметрами не найдено!');

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

    this.footer = new Footer(this.node);
    this.footer.node.style.order = '10';

    this.music = new Music(false);
    this.snow = new Snowfall();

  }


  createPage() {
    // const filterToys = this.filterModel.filtrateData();
    // const filterValues = this.filterModel.filterValues;
    // const selectedToys = this.filterModel.selectedToys;

    if (this.filterModel.selectedToys.length == 0) {
      for (let i = 1; i <= 20; i++) {
        this.filterModel.selectToy(i.toString());
      }
      let counter = this.filterModel.selectedToys.length;
      this.route.selectedToys.node.textContent = counter.toString();
    }

    const data: IData = {
      filterToys: this.filterModel.filtrateData(),
      filterValues: this.filterModel.filterValues,
      selectedToys: this.filterModel.selectedToys,
    }

    const newPage = new (this.pages[window.location.hash] || HomePage)(this.node, data);// filterToys, filterValues, );

    newPage.onCheck = (type: string, value: string) => {
      if (this.filterModel.filterValues[type].includes(value)) {
        this.filterModel.removeFilterValue(type, value)
      } else {
        this.filterModel.addFilterValue(type, value);
      }
      // const toys = this.filterModel.filtrateData();
      // if (toys.length == 0) {

      //   this.filterModel.removeFilterValue(type, value);
      //   this.popupNotToys.node.classList.remove('hidden-popup');
      // } else {
      newPage.updatePage(this.filterModel.filtrateData());
      // }

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

    newPage.onSelect = (num: string) => {
      this.filterModel.selectToy(num);
      let counter = this.filterModel.selectedToys.length;
      //this.route.selectedToys.node.textContent = counter.toString();
      // let counter = this.filterModel.countSelectedToys();
      if (counter <= 20) {
        this.route.selectedToys.node.textContent = counter.toString();//this.filterModel.countSelectedToys().toString();
        newPage.updatePage(this.filterModel.filtrateData());
      }
      else {
        this.popup.node.classList.remove('hidden-popup');
        this.filterModel.selectToy(num);
      }
    }

    newPage.onSelectFon = (img: string) => {
      //newPage.canvas = new CanvasTrees(newPage.content.node, img);
      newPage.canvas.setFonValues(img);

    }

    newPage.onSelectTree = (img: string) => {
      // newPage.canvas = new CanvasTrees(newPage.content.node, img);
      newPage.canvas.setTreeValues(img);
    }

    newPage.playMusic = () => {
      //(this.music.isPlay)?newPage.    
      //this.isMusicPlay = true; 
      this.music.play();
    }

    newPage.runSnow = () => {
      //(this.music.isPlay)?newPage.    
      //this.isMusicPlay = true; 
      this.snow.play();
    }



    this.currentPage = newPage;
  }

  loadWindow() {
    if (this.currentPage) {
      let currentPage = this.currentPage;
      //this.music.isPlay = true;
      //this.music.play();
      currentPage.destroy();
      this.createPage();
    } else {
      this.createPage();
    }
  }

}
