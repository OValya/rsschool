import Control from '../common/control';
import Page from './page';
import PicturesBox from '../components/container-pictures'
import Picture from '../components/picture';
import ToysBox from '../components/toys-box'
import { IData } from './newApp';
import CanvasTrees from './canvas1';
import SettingPanel from '../components/settings-panel'
import Snowfall from '../application/snowfall'
//import ToysBox from '../components/toys-box'


export default class TreesPage extends Page {
  settings: Control<HTMLElement>;
  content: Control<HTMLElement>;
  toys: Control<HTMLElement>;
  container: Control<HTMLElement>;
  fonPictures: PicturesBox;
  treePictures: PicturesBox;
  onSelectFon: (img: string) => void;
  onSelectTree: (img: string) => void;
  toyPictures: ToysBox;
  audioAndSnow: SettingPanel;
  snow: Snowfall;
  
  constructor(parentNode: HTMLElement, data:IData) {
    super(parentNode);
    this.container = new Control(this.node, 'div', 'tree-page')
    this.settings = new Control(this.container.node, 'div', 'settings-section');
    this.fonPictures = new PicturesBox(this.settings.node, 10, './assets/bg/', 'jpg', 'Выберите фон');
    this.fonPictures.onSelect = (imgSrc) => {
      this.onSelectFon(imgSrc);
    }
    this.treePictures = new PicturesBox(this.settings.node, 6, './assets/tree/', 'png', 'Выберите ёлку');
    this.treePictures.onSelect = (img) => {
      this.onSelectTree(img);
    }

    this.content = new Control(this.container.node, 'div', 'content-section');
    this.canvas = new CanvasTrees(this.content.node);
    this.canvas.setFonValues('./assets/bg/1.jpg');
    this.canvas.setTreeValues('./assets/tree/1.png');

    this.toys = new Control(this.container.node, 'div', 'toys-section');
    
    this.toyPictures = new ToysBox(this.toys.node, './assets/toys/', 'png', 'Выберите игрушку', data.selectedToys);
    this.toyPictures.onSelect = (img) => {};
    this.audioAndSnow = new SettingPanel(this.toys.node);
    this.audioAndSnow.onClick = () => {
     setInterval(this.createSnow, 100);      
    }

  }

 

  createSnow(){
    this.snow = new Snowfall(document.body);
   // this.snow.node.classList.add('go');
  }



  updatePage(){

  }
}