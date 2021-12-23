import Control from '../common/control';
import Page from './page';
import PicturesBox from '../components/container-pictures'
import ToysBox from '../components/toys-box'
import { IData } from './newApp';
//import ToysBox from '../components/toys-box'


export default class TreesPage extends Page {
  settings: Control<HTMLElement>;
  content: Control<HTMLElement>;
  toys: Control<HTMLElement>;
  container: Control<HTMLElement>;
  fonPictures: PicturesBox;
  treePictures: PicturesBox;
  onSelectFon: (img: HTMLImageElement) => void;
  onSelectTree: (img: HTMLImageElement) => void;
  toyPictures: ToysBox;
  constructor(parentNode: HTMLElement, data:IData) {
    super(parentNode);
    this.container = new Control(this.node, 'div', 'tree-page')
    this.settings = new Control(this.container.node, 'div', 'settings-section');
    this.fonPictures = new PicturesBox(this.settings.node, 10, './assets/bg/', 'jpg', 'Выберите фон');
    this.fonPictures.onSelect = (img) => {
      this.onSelectFon(img);
    }
    this.treePictures = new PicturesBox(this.settings.node, 6, './assets/tree/', 'png', 'Выберите ёлку');
    this.treePictures.onSelect = (img) => {
      this.onSelectTree(img);
    }

    this.content = new Control(this.container.node, 'div', 'content-section');
    this.toys = new Control(this.container.node, 'div', 'toys-section');
    this.toyPictures = new ToysBox(this.toys.node, './assets/toys/', 'png', 'Выберите игрушку', data.selectedToys);


  }
  updatePage(){

  }
}