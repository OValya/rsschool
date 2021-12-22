import Control from '../common/control';

export default class PicturesBox extends Control {
  public blockTitle: Control<HTMLHeadingElement>;
  onSelect: (num: string) => void;
  picture: Control<HTMLElement>;

  constructor(parentNode: HTMLElement, count: number, path: string, ext:string, title: string) {
    super(parentNode, 'div', 'pictures-box');
    this.blockTitle = new Control(this.node, 'p', 'title-pictures-box', title)
   
    for (let i = 1; i <= count; i++) {
      this.picture = new Control(this.node, 'div', 'picture-icon');
      this.picture.node.style.background = `url('${path}${i}.${ext}') no-repeat 0 0/cover`
      this.picture.node.onclick = () => {
      }
    }
  }
}