import Control from '../common/control'

interface IPicture {
  image: HTMLImageElement,
  sX: number,
  sY: number,
  widthImage: number,
  heightImage: number
}

export default class CanvasTrees {

  canvas: Control<HTMLCanvasElement>
  ctx: CanvasRenderingContext2D
  fon: IPicture;
  tree: IPicture;
  toys: IPicture[];
  onDrop: (ev: DragEvent) => void;
  constructor(parentNode: HTMLElement) {

    this.canvas = new Control(parentNode, 'canvas', 'canvas');
    this.canvas.node.width = document.body.clientWidth * 0.55;
    this.canvas.node.height = document.body.clientHeight * 0.75;
    this.ctx = this.canvas.node.getContext('2d');

    this.canvas.node.ondrop = (ev) => {
      ev.preventDefault();
      const data = ev.dataTransfer.getData('text/plain');
      console.log(data);
      console.log('x', ev.offsetX)

      const mousePositionX = ev.dataTransfer.getData('mpX')
      const mousePositionY = ev.dataTransfer.getData('mpY')
      this.setToyValues(data, ev.offsetX, ev.offsetY);
    }

    this.canvas.node.ondragover = (ev) => {
      ev.preventDefault();
    }
  }

  setToyValues(path: string, sX: number, sY: number) {
    const image = new Image();
    const startX = sX - image.width / 2;
    const startY = sY - image.height / 2;
    const imageWidth = this.canvas.node.width * 0.07;
    const imageHeight = this.canvas.node.height * 0.1;
    image.onload = () => {
     this.ctx.drawImage(image, startX, startY, imageWidth, imageHeight);
    }
    image.src = path;

    this.toys.push({
      image: image,
      sX: startX,
      sY: startY,
      widthImage: imageWidth,
      heightImage: imageHeight
    });

  }

  setFonValues(imgSrc: string) {
    const image = new Image();
    const startX = 0;
    const startY = 0;
    const imageWidth = this.canvas.node.width;
    const imageHeight = this.canvas.node.height;

    image.onload = () => {
      this.ctx.drawImage(image, startX, startY, imageWidth, imageHeight);
    }
    image.src = imgSrc;

    this.fon = {
      image: image,
      sX: startX,
      sY: startY,
      widthImage: imageWidth,
      heightImage: imageHeight
    }
  }

  setTreeValues(imgSrc: string) {
    const startX = this.canvas.node.width * 0.25;
    const startY = this.canvas.node.height * 0.1;
    const imageWidth = this.canvas.node.width * 0.5;
    const imageHeight = this.canvas.node.height - 2 * startY;

    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, startX, startY, imageWidth, imageHeight);
    }
    image.src = imgSrc;

    this.tree = {
      image: image,
      sX: startX,
      sY: startY,
      widthImage: imageWidth,
      heightImage: imageHeight
    }
  }

  drawImage(param: IPicture) {
  }


}