import Control from '../common/control';
import Picture from './picture'
import { IToysData } from '../model/newDataModel'

export default class ToysBox extends Control {
  public blockTitle: Control<HTMLHeadingElement>;
  onSelect: (imgSrc:string) => void;
  picture: Picture;

  constructor(parentNode: HTMLElement, path: string, ext: string, title: string, toys: IToysData[]) {
    super(parentNode, 'div', 'toys-box');
    this.blockTitle = new Control(this.node, 'p', 'title-pictures-box', title)
    toys.forEach(toy => {
      this.picture = new Picture(`${path}${toy.num}.${ext}`);
      this.picture.el.draggable = true;
     // console.log('toys', this.picture);
      this.node.append(this.picture.el);
      this.picture.onSelect = (imgSrc:string) => {
        this.onSelect(imgSrc);
      }
    });
  }
}