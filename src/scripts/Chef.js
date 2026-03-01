import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    console.log(this.element);
    this.menu = [];
    this.container = this.element.querySelector('.chef__order');
    console.log('yep');
    this.init();
  }
  init() {
    const boutonsCommande = this.element.querySelectorAll('.button-secondary');
    const poutines = this.element.querySelectorAll('.poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
      console.log(this.menu);
    }
    for (let i = 0; i < boutonsCommande.length; i++) {
      const bouton = boutonsCommande[i];
      bouton.addEventListener('click', this.sendOrder.bind(this));
    }
  }
  sendOrder() {
    var nombreActif = 0;
    this.container.innerHTML = '';
    const p = document.createElement('p');
    const poutines = this.element.querySelectorAll('.poutine');
    for (let i = 0; i < this.menu.length; i++) {
      const element = this.menu[i];
      if (element.active) {
        nombreActif += 1;
      }
    }
    console.log('mhm');
    p.innerText = ` Nombre total de poutine(s) :  ${nombreActif}`;
    console.log(p);
    this.container.appendChild(p);
  }
}
