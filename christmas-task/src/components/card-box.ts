import Control from '../common/control';
import Card from './card';
import { IToysData } from '../dataModel';

export default class CardBox extends Control{
  public blockTitle: Control<HTMLHeadingElement>;
  //public filters: HTMLDivElement[];
  constructor(parentNode:HTMLElement, toys:Array<IToysData>){
    super(parentNode, 'div', 'card-box');
    this.blockTitle = new Control(this.node, 'h1', 'title-card-box', 'Коробка с игрушками')
    console.log('toys', toys); 
    toys.forEach(toy => {
      new Card(this.node, toy);
    });
  }
}