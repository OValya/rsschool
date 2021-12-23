import Control from '../common/control';
import Picture from './picture'

export default class PicturesBox extends Control {
  public blockTitle: Control<HTMLHeadingElement>;
  onSelect: (img: HTMLImageElement) => void;
  picture: Picture;

  constructor(parentNode: HTMLElement, count: number, path: string, ext: string, title: string) {
    super(parentNode, 'div', 'pictures-box');
    this.blockTitle = new Control(this.node, 'p', 'title-pictures-box', title)

    for (let i = 1; i <= count; i++) {
      //this.picture = new Control(this.node, 'img', 'picture-icon');
      // this.picture.node.style.background = `url('${path}${i}.${ext}') no-repeat 0 0/cover`
      // this.picture = new Image();
      // this.picture.classList.add('picture-icon')
      // this.picture.src = `${path}${i}.${ext}`;
      this.picture = new Picture(`${path}${i}.${ext}`)
      this.node.append(this.picture.el);
      this.picture.onSelect = (img:HTMLImageElement) => {
        this.onSelect(img);
      }
    }

    
  }
}