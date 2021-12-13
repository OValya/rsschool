import Control from '../common/control';
import { IToysData } from '../dataModel'

export default class Card extends Control {
  title: Control<HTMLHeadingElement>;
  descriptions: Control<HTMLUListElement>;
  count: Control<HTMLElement>;
  shape: Control<HTMLElement>;
  year: Control<HTMLElement>;
  color: Control<HTMLElement>;
  size: Control<HTMLElement>;
  favorite: Control<HTMLElement>;

  constructor(parentNode:HTMLElement, dataCard: IToysData) {
    super(parentNode, 'div', 'card');
    this.title = new Control(this.node, 'h3', 'card-title', `${dataCard.name}`);
    this.descriptions = new Control(this.node, 'ul', 'card-description');
    this.count = new Control(this.node, 'li', '', `Количество: ${dataCard.count} шт.`);
    this.shape = new Control(this.node, 'li', '', `Форма: ${dataCard.shape}`);
    this.year = new Control(this.node, 'li', '', `Год производства: ${dataCard.year}`);
    this.color = new Control(this.node, 'li', '', `Цвет: ${dataCard.color}`);
    this.size = new Control(this.node, 'li', '', `Размер: ${dataCard.size}`);
    this.favorite = new Control(this.node, 'li', '', `Любимая: ${dataCard.favorite}`);
    this.node.style.background = `../assets/toys/${dataCard.num}.jpg`;
    this.descriptions.node.append(this.count.node,
      this.shape.node, this.year.node, this.color.node, this.size.node, this.favorite.node);

    this.node.onclick = () => {
      //
    }
  }
}