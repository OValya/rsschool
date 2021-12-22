import Control from '../common/control';
import Page from './page';
import PicturesBox from '../components/container-pictures'


export default class TreesPage extends Page {
  settings: Control<HTMLElement>;
  content: Control<HTMLElement>;
  toys: Control<HTMLElement>;
  container: Control<HTMLElement>;
  fonPictures: PicturesBox;
  treePictures: PicturesBox;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.container = new Control(this.node, 'div', 'tree-page')
    this.settings = new Control(this.container.node, 'div', 'settings-section');
    this.content = new Control(this.container.node, 'div', 'content-section');
    this.toys = new Control(this.container.node, 'div', 'toys-section');
    //const box = new Control(this.node, 'div', '', 'Ёлки');
    this.fonPictures = new PicturesBox(this.settings.node, 10, './assets/bg/','jpg', 'Выберите фон');
    this.treePictures = new PicturesBox(this.settings.node, 6, './assets/tree/', 'png', 'Выберите ёлку`');
   
  }
}