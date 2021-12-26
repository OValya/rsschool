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
  mask: ImageData;
  constructor(parentNode: HTMLElement) {

    this.canvas = new Control(parentNode, 'canvas', 'canvas');
    this.canvas.node.width = 700;//document.body.clientWidth * 0.55;
    this.canvas.node.height = 500;//document.body.clientHeight * 0.75;
    this.ctx = this.canvas.node.getContext('2d');
    // this.canvasMask = 
    this.canvas.node.ondrop = (ev) => {
      ev.preventDefault();
      const data = ev.dataTransfer.getData('text/plain');
      // console.log(data);
      // console.log('x', ev.offsetX)

      // const mousePositionX = ev.dataTransfer.getData('mpX')
      // const mousePositionY = ev.dataTransfer.getData('mpY')
      if (this.mask.data[((ev.offsetY * (this.mask.width * 4)) + (ev.offsetX * 4) + 3)]) {
        this.setToyValues(data, ev.offsetX, ev.offsetY);
      }
    }

    this.canvas.node.ondragover = (ev) => {
      ev.preventDefault();
    }

    this.canvas.node.onmousedown = (e) => {
      const downX = e.offsetX;
      const downY = e.offsetY;
      console.log(this.toys)
      for (let i = 0, len = this.toys.length; i < len; i++) {
        const obj = this.toys[i];
        console.log('eoffsetX', downX)
        console.log('eoffsetY', downY)
        console.log('objX', obj.sX)
        console.log('objY', obj.sY)


        // if (this.isPointInRange(downX, downY, obj)) {
        //   console.log(obj);
        // }

        //this.startMove(obj, downX, downY);
        //break;
      }
    }
  }

  isPointInRange(x: number, y: number, obj: IPicture) {
    return (x < obj.sX &&
      x > obj.sX + obj.widthImage &&
      y < obj.sY &&
      y > obj.sY + obj.heightImage);
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
    ///////////////////
    this.drawMask(this.tree[0]);
    /////////////////////
    this.render();
  }

  drawPicture(param: IPicture[]) {
    param.forEach(item => {
      const image = new Image();
      image.onload = () => {
        this.ctx.drawImage(image, item.sX, item.sY, item.widthImage, item.heightImage);
        //this.drawMask();
      }
      image.src = item.image;
    })
  }

  loadImage(param: IPicture) {
    return new Promise<HTMLImageElement>((resolve) => {
      const image = new Image();
      image.onload = () => {
        resolve(image)
        //this.ctx.drawImage(image, param.sX, param.sY, param.widthImage, param.heightImage);
        //this.drawMask();
      }
      image.src = param.image;
    })
  }



  drawMask(param: IPicture) {
    const dobble = document.createElement('canvas');
    dobble.width = 500;
    dobble.height = 500;
    const ctx = dobble.getContext('2d');
    this.loadImage(param)
      .then(image => {
        ctx.drawImage(image, param.sX, param.sY, param.widthImage, param.heightImage);
        //document.body.append(dobble);
        /*console.log(param.sX)
        console.log(param.sY)
        console.log(param.widthImage)
        console.log(param.heightImage)*/
      })
      .then(() => {
        const mask = ctx.getImageData(0, 0, dobble.width, dobble.height);
        //const data = mask.data;
        this.mask = mask;
        //console.log('data', this.mask.data);
      })
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.node.width, this.canvas.node.height);
    if (this.fon.length > 0) this.drawPicture(this.fon);
    if (this.tree.length > 0) this.drawPicture(this.tree);
    if (this.toys.length > 0) this.drawPicture(this.toys);
  }
}