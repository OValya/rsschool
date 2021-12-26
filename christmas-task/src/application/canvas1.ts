import Control from '../common/control'

interface IPicture {
  image: string,// HTMLImageElement,
  sX: number,
  sY: number,
  widthImage: number,
  heightImage: number
}

export default class CanvasTrees {

  canvas: Control<HTMLCanvasElement>
  ctx: CanvasRenderingContext2D
  fon: IPicture[] = [];
  tree: IPicture[] = [];
  toys: IPicture[] = [];
  onDrop: (ev: DragEvent) => void;
  constructor(parentNode: HTMLElement) {

    this.canvas = new Control(parentNode, 'canvas', 'canvas');
    this.canvas.node.width = document.body.clientWidth * 0.55;
    this.canvas.node.height = document.body.clientHeight * 0.75;
    this.ctx = this.canvas.node.getContext('2d');
   // this.canvasMask = 
    this.canvas.node.ondrop = (ev) => {
      ev.preventDefault();
      const data = ev.dataTransfer.getData('text/plain');
      // console.log(data);
      // console.log('x', ev.offsetX)

      // const mousePositionX = ev.dataTransfer.getData('mpX')
      // const mousePositionY = ev.dataTransfer.getData('mpY')
      this.setToyValues(data, ev.offsetX, ev.offsetY);
    }

    this.canvas.node.ondragover = (ev) => {
      ev.preventDefault();
    }
  }

  setToyValues(path: string, sX: number, sY: number) {
    const imageWidth = this.canvas.node.width * 0.07;
    const imageHeight = this.canvas.node.height * 0.1;
    const startX = sX - imageWidth / 2;
    const startY = sY - imageHeight / 2;
    this.toys.push({
      image: path,
      sX: startX,
      sY: startY,
      widthImage: imageWidth,
      heightImage: imageHeight
    });
    this.render();
  }

  setFonValues(imgSrc: string) {
    
    const startX = 0;
    const startY = 0;
    const imageWidth = this.canvas.node.width;
    const imageHeight = this.canvas.node.height;
    const fon = {
      image: imgSrc,
      sX: startX,
      sY: startY,
      widthImage: imageWidth,
      heightImage: imageHeight
    };
    this.fon[0] = fon;
    this.render();
   // this.drawImage(this.fon);
  }



  setTreeValues(imgSrc: string) {
    const startX = this.canvas.node.width * 0.25;
    const startY = this.canvas.node.height * 0.1;
    const imageWidth = this.canvas.node.width * 0.5;
    const imageHeight = this.canvas.node.height - 2 * startY;
    this.tree[0] = {
      image: imgSrc,
      sX: startX,
      sY: startY,
      widthImage: imageWidth,
      heightImage: imageHeight
    }
    this.render();
  }

  drawImage(param: IPicture[]) {
    param.forEach(item => {
      const image = new Image();
      image.onload = () => {
        this.ctx.drawImage(image, item.sX, item.sY, item.widthImage, item.heightImage);
      }
      image.src = item.image;
    })
  }

  render(){
    //this.ctx.clearRect(0, 0, this.canvas.node.width, this.canvas.node.height);
    if(this.fon.length>0) this.drawImage(this.fon);
    if(this.tree.length>0) this.drawImage(this.tree);
    if(this.toys.length>0) this.drawImage(this.toys);
  }




}