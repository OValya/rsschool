import Control from '../common/control'

const sortValues = ['По названию от А до Я',
  'По названию от Я до А',
  'Сначала новые',
  'Сначала старые']

export default class SortSelect extends Control {
  sortSelect: Control<HTMLSelectElement>;
  resetButton: Control<HTMLElement>;
  onClick: ()=>void;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'filter-block');

    const title = new Control(this.node, 'h2', '', 'Сортировка игрушек');

    this.sortSelect = new Control(this.node, 'select', 'sort-select');
    //this.sortSelect.node.type = 'select';
    for (let i = 0; i < sortValues.length; i++) {
      const option = document.createElement('option');
      option.value = i.toString();
      option.text = sortValues[i];
      this.sortSelect.node.add(option);
    }

    this.resetButton = new Control(this.node, 'button', 'reset-button', 'Сбросить фильтры');
    this.resetButton.node.onclick = () => {
      this.onClick();
    } 
  
  }
}