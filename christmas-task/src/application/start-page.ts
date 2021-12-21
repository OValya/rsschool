import Control from '../common/control';
import Page from './page';
import ToysPage from './toys-page';


export default class HomePage extends Page {

  main: Control<HTMLElement>;
  title: Control<HTMLElement>;
  startButton: Control<HTMLElement>;
  footer: Control<HTMLElement>;
  boxBall: Control<HTMLElement>;
  
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.main = new Control(this.node, 'div', 'main-start-page');
    this.boxBall = new Control(this.main.node, 'div', 'box-ball');
    this.title = new Control(this.main.node, 'div', 'title-start-page', `Новогодняя игра <br/> "Наряди ёлку"`);
    this.startButton = new Control(this.main.node, 'button', 'start-button', 'Начать');
    
    this.startButton.node.onclick = () => {
      this.onClick();
    }
  }
  onClick() {
      this.destroy();    
      window.location.href = '#toys';
  }
}