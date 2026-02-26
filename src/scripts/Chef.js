import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = document.querySelector('.chef__order');
    console.log('yep');
    this.init();
  }
  init() {
    const boutonsCommande = document.querySelectorAll('.button-secondary');
    const poutines = document.querySelectorAll('.poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      new Poutine(poutine);
      this.menu.push(poutine);
    }
    for (let i = 0; i < boutonsCommande.length; i++) {
      const bouton = boutonsCommande[i];
      bouton.addEventListener('click', this.sendOrder.bind(this));
    }
  }
  sendOrder() {
    const p = document.createElement('p');
    p.innerText = ` Nombre total de poutine(s) :  ${this.element}`;
    console.log(p);
    this.container.appendChild(p);
  }
}
