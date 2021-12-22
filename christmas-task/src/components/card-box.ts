import Control from '../common/control';
import Card from './card';
import { IToysData } from '../model/newDataModel';

export default class CardBox extends Control {
  public blockTitle: Control<HTMLHeadingElement>;
  toyCard: Card;
  onSelect: (num: string) => void;
  //public filters: HTMLDivElement[];
  constructor(parentNode: HTMLElement, toys: Array<IToysData>) {
    super(parentNode, 'div', 'card-box');
    this.blockTitle = new Control(this.node, 'h1', 'title-card-box', 'Коробка с игрушками')
    //console.log('toys', toys); 
    if (toys.length == 0) { 
      const messsage = new Control(this.node, 'h3', 'content-message', 'Игрушек не найдено.') 
    }
    else {
      toys.forEach(toy => {
        this.toyCard = new Card(this.node, toy);
        this.toyCard.onSelect = (num: string) => {
          this.onSelect(num);
        }
      });
    }
  }
}