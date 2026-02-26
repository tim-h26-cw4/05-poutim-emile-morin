import Icons from './utils/Icons.js';
import Chef from './Chef.js';
// La ligne suivante devrait être au TOUT début du init() du Main

class Main {
  constructor() {
    this.init();
  }
  init() {
    Icons.load();
    console.log('done');
    const poutines = document.querySelectorAll('.poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      console.log('pOUTINE');
      new Chef(poutine);
    }
  }
}

new Main();
