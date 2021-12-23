export default class Picture {
  el: HTMLImageElement;
  onSelect: (img: HTMLImageElement) => void;
  constructor(path: string) {
    this.el = new Image();
    this.el.classList.add('picture-icon')
    this.el.src = path;
    this.el.onclick = () => {
      //console.log('el', this.el)
      this.onSelect(this.el);
      
    }
  }
}