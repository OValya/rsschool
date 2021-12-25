import Control from '../common/control'

export default class Canvas extends Control{
  canvas: Control<HTMLCanvasElement>
  ctx: CanvasRenderingContext2D
  fon: void;
  constructor(parentNode:HTMLElement, image:HTMLImageElement,){
    super(parentNode, 'div', 'canvas-box')
    this.canvas = new Control(this.node, 'canvas', 'canvas');
    this.canvas.node.width = document.body.clientWidth * 0.55;
    this.canvas.node.height = document.body.clientHeight * 0.75;
    this.ctx = this.canvas.node.getContext('2d');
    console.log('wi', image.naturalWidth)
    console.log('wc', this.canvas.node.width)

    this.ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, this.canvas.node.width, this.canvas.node.height)//, this.canvas.node.width, this.canvas.node.height);

  }
}