import Control from '../common/control'

export default class Canvas extends Control{
  canvas: Control<HTMLCanvasElement>
  ctx: CanvasRenderingContext2D
  fon: void;
  constructor(parentNode:HTMLElement, image:HTMLImageElement,){
    super(parentNode, 'div', 'canvas-box')
    this.canvas = new Control(this.node, 'canvas', 'canvas');
    this.canvas.node.width = 700;
    this.canvas.node.height = 700;
    this.ctx = this.canvas.node.getContext('2d');
    this.ctx.drawImage(image, 500, 100, this.canvas.node.width, this.canvas.node.height);

  }
}