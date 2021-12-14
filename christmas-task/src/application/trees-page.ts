import Control from '../common/control';
import Page from './page';


export default class TreesPage extends Page {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
  
    const box = new Control(this.node, 'div', '', 'Ёлки');
   
  }
}