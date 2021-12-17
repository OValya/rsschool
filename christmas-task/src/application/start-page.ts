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
    this.footer = new Control(this.node, 'footer', 'footer', 
      `<span> 2021 </span>
      <a class = "github-logo" href="#"></a>
      <a href="#"><img src="./src/assets/svg/footer/rss_logo.svg" alt="rsschool-logo" >`);
    this.startButton.node.onclick = () => {
      this.onClick();
    }
  }
  onClick() {
      this.destroy();    
      window.location.href = '#toys';
  }
}