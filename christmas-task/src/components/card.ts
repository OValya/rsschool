import Control from '../common/control';
import { IToysData } from '../newDataModel'

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

  constructor(parentNode:HTMLElement, dataCard: IToysData) {
    super(parentNode, 'div', 'card');
    this.title = new Control(this.node, 'h3', 'card-title', `${dataCard.name}`);
    this.num = dataCard.num;
    this.descriptions = new Control(this.node, 'ul', 'card-description');
    this.count = new Control(this.descriptions.node, 'li', '', `Количество: ${dataCard.count} шт.`);
    this.shape = new Control(this.descriptions.node, 'li', '', `Форма: ${dataCard.shape}`);
    this.year = new Control(this.descriptions.node, 'li', '', `Год производства: ${dataCard.year}`);
    this.color = new Control(this.descriptions.node, 'li', '', `Цвет: ${dataCard.color}`);
    this.size = new Control(this.descriptions.node, 'li', '', `Размер: ${dataCard.size}`);
    this.favorite = new Control(this.descriptions.node, 'li', '', `Любимая: ${dataCard.favorite}`);
    this.node.style.background = `rgba(36, 197, 219, 0.15) url('./assets/toys/${dataCard.num}.png') no-repeat 0% 40%/30%`;
    // this.descriptions.node.append(this.count.node,
    //   this.shape.node, this.year.node, this.color.node, this.size.node, this.favorite.node);

    this.node.onclick = () => {
      
    }
  }
}