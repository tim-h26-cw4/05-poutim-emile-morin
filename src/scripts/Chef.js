export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = document.querySelectorAll('.chef__order');
    console.log('yep');
    this.init();
  }
  init() {
    let poutine = this.element;
    this.menu.push(poutine);
    const boutons = document.querySelectorAll('.button-secondary');
    for (let i = 0; i < boutons.length; i++) {
      const bouton = boutons[i];
      bouton.addEventListener('click', this.sendOrder);
    }
  }
  sendOrder() {
    console.log('yep');
  }
}
