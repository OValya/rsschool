import Control from '../common/control';
import { IToysData } from '../model/newDataModel'

export default class Card extends Control {
  title: Control<HTMLHeadingElement>;
  descriptions: Control<HTMLUListElement>;
  count: Control<HTMLElement>;
  shape: Control<HTMLElement>;
  year: Control<HTMLElement>;
  color: Control<HTMLElement>;
  size: Control<HTMLElement>;
  favorite: Control<HTMLElement>;
  num: string;
  select: Control<HTMLImageElement>;
  onSelect: (num: string) => void;

  constructor(parentNode: HTMLElement, dataCard: IToysData) {
    super(parentNode, 'div', 'card');
    this.title = new Control(this.node, 'h3', 'card-title', `${dataCard.name}`);
    this.num = dataCard.num;
    this.descriptions = new Control(this.node, 'ul', 'card-description');
    this.count = new Control(this.descriptions.node, 'li', '', `Количество: ${dataCard.count} шт.`);
    this.shape = new Control(this.descriptions.node, 'li', '', `Форма: ${dataCard.shape}`);
    this.year = new Control(this.descriptions.node, 'li', '', `Год покупки: ${dataCard.year}`);
    this.color = new Control(this.descriptions.node, 'li', '', `Цвет: ${dataCard.color}`);
    this.size = new Control(this.descriptions.node, 'li', '', `Размер: ${dataCard.size}`);
    this.favorite = new Control(this.descriptions.node, 'li', '', `Любимая: ${dataCard.favorite}`);
    this.node.style.background = `rgba(36, 197, 219, 0.15) url('./assets/toys/${dataCard.num}.png') no-repeat 100% 50%/40%`;
    this.select = new Control(this.node, 'div', 'select-img');
    if (dataCard.selected == true) { this.select.node.classList.add('selected') }
    else {
      if (this.select.node.classList.contains('selected'))
        this.select.node.classList.remove('selected');
    }

    
    this.node.onclick = () => {
      // if(this.select.node.classList.contains('selected')){
      //   this.select.node.classList.remove('selected');
      // }else{this.select.node.classList.add('selected');}
      this.onSelect(this.num);
      // if (dataCard.selected == true) { this.select.node.classList.add('selected') }
      // else {
      //   if (this.select.node.classList.contains('selected'))
      //     this.select.node.classList.remove('selected');
      // }
     // console.log('classlist', this.select.node.classList)

    }
  }
}