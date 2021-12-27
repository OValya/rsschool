import Control from '../common/control';
import Picture from './picture'
import { IToysData } from '../model/newDataModel'

export default class ToysBox extends Control {
  public blockTitle: Control<HTMLHeadingElement>;
  onSelect: (imgSrc:string) => void;
  picture: Picture;
  countView: Control<HTMLElement>;

  constructor(parentNode: HTMLElement, path: string, ext: string, title: string, toys: IToysData[]) {
    super(parentNode, 'div', 'toys-box');
    this.blockTitle = new Control(this.node, 'p', 'title-pictures-box', title)
    toys.forEach(toy => {
      const container = new Control(this.node, 'div', 'contaner-toy-count')
      
      this.countView = new Control(container.node, 'div', 'count-toy', toy.count.toString())
      
      this.picture = new Picture(`${path}${toy.num}.${ext}`, toy.count.toString());
      this.picture.el.draggable = true;
     // console.log('toys', this.picture);
      container.node.append(this.picture.el);
      this.picture.onSelect = (imgSrc:string) => {
        this.onSelect(imgSrc);
      }
    });
  }
}