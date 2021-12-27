export default class Picture {
  el: HTMLImageElement;
  onSelect: (imgSrc: string) => void;
  count: string;

  constructor(path: string, count?: string) {
    this.el = new Image();
    this.el.classList.add('picture-icon')
    this.el.src = path;
    this.count = count;
    this.el.onclick = () => {
      //console.log('el', this.el)
      this.onSelect(this.el.src);

    }

    this.el.ondragstart = (ev) => {
        ev.dataTransfer.setData("text/plain", this.el.src);
       // console.log(ev);
         ev.dataTransfer.setData("mouse_position_x",  ev.offsetX.toString() );
         ev.dataTransfer.setData("mouse_position_y", ev.offsetY.toString()  );
        //ev.dataTransfer.setDragImage(img, 35, 0);
     //  console.log(ev.offsetX.toString());
        ev.dataTransfer.dropEffect = "copy";
        
      //console.log('img', this.el.src);
    };

    this.el.onmousedown = (e) => {
      
    }
  }

  getPosition(){

  }
}