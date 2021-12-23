import Control from '../common/control';
import Picture from './picture'
import { IToysData } from '../model/newDataModel'

export default class ToysBox extends Control {
  public blockTitle: Control<HTMLHeadingElement>;
  onSelect: (img: HTMLImageElement) => void;
  picture: Picture;

  constructor(parentNode: HTMLElement, path: string, ext: string, title: string, toys: IToysData[]) {
    super(parentNode, 'div', 'toys-box');
    this.blockTitle = new Control(this.node, 'p', 'title-pictures-box', title)
    toys.forEach(toy => {
      this.picture = new Picture(`${path}${toy.num}.${ext}`);
      console.log('toys', this.picture);
      this.node.append(this.picture.el);
      this.picture.onSelect = (img: HTMLImageElement) => {
        this.onSelect(img);
      }
    });
    // for (let i = 1; i <= count; i++) {

    //   this.picture = new Picture(`${path}${i}.${ext}`)
    //   this.node.append(this.picture.el);
    //   this.picture.onSelect = (img:HTMLImageElement) => {
    //     this.onSelect(img);
    //   }
    // }
  }
}