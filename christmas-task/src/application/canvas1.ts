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
  fon: IPicture;
  tree: IPicture;
  toys: IPicture[] = [];
  onDrop: (ev: DragEvent) => void;
  mask: ImageData;
  // raf: number;
  constructor(parentNode: HTMLElement) {

    this.canvas = new Control(parentNode, 'canvas', 'canvas');
    this.canvas.node.width = document.body.clientWidth * 0.55;//700;
    this.canvas.node.height = document.body.clientHeight * 0.75;//500;
    this.ctx = this.canvas.node.getContext('2d');
    this.tree = {
      image: './assets/tree/1.png',// HTMLImageElement,
      sX: this.canvas.node.width * 0.25,
      sY: this.canvas.node.height * 0.1,
      widthImage: this.canvas.node.width * 0.5,
      heightImage: this.canvas.node.height - 2 * this.canvas.node.height * 0.1
    }
    this.fon = {
      image: './assets/bg/1.jpg',// HTMLImageElement,
      sX: 0,
      sY: 0,
      widthImage: this.canvas.node.width,
      heightImage: this.canvas.node.height
    }
    this.drawMask(this.tree);
    this.update();
    // this.canvasMask = 

    this.canvas.node.ondrop = (ev) => {
      ev.preventDefault();
      const data = ev.dataTransfer.getData('text/plain');
      const positionX = ev.dataTransfer.getData('mouse_position_x');
      const positionY = ev.dataTransfer.getData('mouse_position_y');

      // console.log(data);
      // console.log('x', ev.offsetX)

      // const mousePositionX = ev.dataTransfer.getData('mpX')
      // const mousePositionY = ev.dataTransfer.getData('mpY')
      const posX = ev.offsetX - +positionX / 2;
      const posY = ev.offsetY - +positionY;
      if (this.mask.data[((/*ev.offsetY*/posY * (this.mask.width * 4)) + (/*ev.offsetX*/posX * 4) + 3)]) {
        this.setToyValues(data, ev.offsetX - +positionX, ev.offsetY - +positionY);
      }
    }

    this.canvas.node.ondragover = (ev) => {
      ev.preventDefault();
    }

    //this.canvas.node.ondrag

    this.canvas.node.onmousedown = (e) => {
      const downX = e.offsetX;
      const downY = e.offsetY;
      //console.log(this.toys)
      for (let i = 0; i < this.toys.length; i++) {
        const obj = this.toys[i];
        // console.log('eoffsetX', downX)
        // console.log('eoffsetY', downY)
        // console.log('objX', obj.sX)
        // console.log('objY', obj.sY)
        if (!this.isPointInRange(downX, downY, obj)) {
          continue;
          //console.log(obj);
        }

        this.startMove(obj, downX, downY);
        //break;
      }
    }
  }

  isPointInRange(x: number, y: number, obj: IPicture) {
    return !(x < obj.sX ||
      x > obj.sX + obj.widthImage ||
      y < obj.sY ||
      y > obj.sY + obj.heightImage);
  }

  startMove(obj: IPicture, downX: number, downY: number) {
    //var canvas = document.getElementById('canvas');
    this.toys.splice(this.toys.indexOf(obj), 1);
    this.update();
    //console.log('obj', obj)
    //console.log('toys', this.toys)
    const origX = obj.sX;
    const origY = obj.sY;
    this.canvas.node.onmousemove = (e) => {
      const moveX = e.offsetX;
      const moveY = e.offsetY;
      const diffX = moveX - downX;
      const diffY = moveY - downY;
      //this.setToyValues(path: string, offsetX: number, offsetY: number)
      obj.sX = origX + diffX;
      obj.sY = origY + diffY;
     //this.update()


      //this.toys.slice(this.)
    }

    this.canvas.node.onmouseup = () => {
      const posX = obj.sX
      const posY = obj.sY
      if (this.mask.data[((/*ev.offsetY*/posY * (this.mask.width * 4)) + (/*ev.offsetX*/posX * 4) + 3)]) {
        this.setToyValues(obj.image, posX, posY/*ev.offsetX - +positionX, ev.offsetY - +positionY*/);
      } else { this.setToyValues(obj.image, origX, origY) }

      //this.setToyValues(obj.image, obj.sX, obj.sY);
      // stop moving
      this.canvas.node.onmousemove = function () { };
    }
  }

  setToyValues(path: string, offsetX: number, offsetY: number) {
    const imageWidth = this.canvas.node.width * 0.07;
    const imageHeight = this.canvas.node.height * 0.1;
    const startX = offsetX;// - imageWidth / 2;
    const startY = offsetY;// - imageHeight / 2;
    this.toys.push({
      image: path,
      sX: startX,
      sY: startY,
      widthImage: imageWidth,
      heightImage: imageHeight
    });
    this.update();
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
    this.fon = fon;
    this.update();
    // this.drawImage(this.fon);
  }

  setTreeValues(imgSrc: string) {
    const startX = this.canvas.node.width * 0.25;
    const startY = this.canvas.node.height * 0.1;
    const imageWidth = this.canvas.node.width * 0.5;
    const imageHeight = this.canvas.node.height - 2 * startY;
    this.tree = {
      image: imgSrc,
      sX: startX,
      sY: startY,
      widthImage: imageWidth,
      heightImage: imageHeight
    }
    ///////////////////
    this.drawMask(this.tree);
    /////////////////////
    this.update();
  }

  drawPicture(param: IPicture/*param: IPicture[]*/) {
    //param.forEach(item => {
    // const image = new Image();
    //  image.onload = () => {
    this.loadImage(param)
      .then(image =>
        this.ctx.drawImage(image, param.sX, param.sY, param.widthImage, param.heightImage));
    //this.drawMask();
    //  }
    //  image.src = item.image;
    // })
  }

  loadImage(param: IPicture): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => {
        resolve(image)
      }
      image.src = param.image;
    })
  }


  drawToys(params: IPicture[]) {
    // const dobble = document.createElement('canvas');
    // dobble.width = 700;
    // dobble.height = 500;
    // const ctx = dobble.getContext('2d');
    const allPictures = params.map(param => { return this.loadImage(param) });
    Promise.all(allPictures).then((images) => {
      params.forEach((param, index) => {
        this.ctx.drawImage(images[index], param.sX, param.sY, param.widthImage, param.heightImage)
      })
    })


    //document.body.append(dobble);
    /*console.log(param.sX)
    console.log(param.sY)
    console.log(param.widthImage)
    console.log(param.heightImage)*/
  }
  // .then(() => {
  //   const mask = ctx.getImageData(0, 0, dobble.width, dobble.height);
  //   //const data = mask.data;
  //   this.mask = mask;
  //   //console.log('data', this.mask.data);
  // })



  drawMask(param: IPicture) {
    const dobble = document.createElement('canvas');
    dobble.width = document.body.clientWidth * 0.55;//700;
    dobble.height = document.body.clientHeight * 0.75;//500;
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
      dobble.remove();
  }
 
  update() {
    this.ctx.clearRect(0, 0, this.canvas.node.width, this.canvas.node.height);
    /*if (this.fon.length > 0) this.draw(this.fon[0]);*/this.drawPicture(this.fon);
    /*if (this.tree.length > 0) this.draw(this.tree[0])*/this.drawPicture(this.tree);
    if (this.toys.length > 0) this.drawToys(this.toys);//this.drawPicture(this.toys);
  }

  // loadImageDouble: function (src: string): Promise<HTMLImageElement>{       
  //   // console.log('loadImage src = ', src)       
  //   return new Promise((resolve) => {         
  //     let startFon = new Image();         
  //     startFon.onload = () => {           
  //       resolve(startFon);}         
  //       startFon.src = src;       
  //     })     
  //   }
}