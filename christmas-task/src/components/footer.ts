import Control from '../common/control'

export default class Footer extends Control{
  logoYear: Control<HTMLElement>;
  logoGithub: Control<HTMLLinkElement>;
  logoRss: Control<HTMLLinkElement>;
  constructor(parentNode:HTMLElement){
    super(parentNode, 'div', 'footer')
    this.logoYear = new Control(this.node, 'span', 'year-logo', '2021');
    this.logoGithub = new Control(this.node, 'a', 'github-logo', 'Valentina Frolina');
    this.logoRss = new Control(this.node, 'a', 'github-logo', '<img src="./assets/svg/footer/rss_logo.svg" alt="rsschool-logo" >');
    this.logoGithub.node.href = 'https://github.com/OValya';
    this.logoRss.node.href = 'https://rs.school';
      // `<span class="year-logo"> 2021 </span>
      // <a class = "github-logo" href="https://github.com/OValya">Valentina Frolina</a>
      // <a href="https://rs.school"><img src="./assets/svg/footer/rss_logo.svg" alt="rsschool-logo" >`);
  }
}