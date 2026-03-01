import Icons from './utils/Icons.js';
import Chef from './Chef.js';
// La ligne suivante devrait être au TOUT début du init() du Main

class Main {
  constructor() {
    this.init();
  }
  init() {
    const poutines = document.querySelectorAll('[data-component="chef"]');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      console.log('pOUTINE');
      new Chef(poutine);
    }
    Icons.load();
  }
}

new Main();
