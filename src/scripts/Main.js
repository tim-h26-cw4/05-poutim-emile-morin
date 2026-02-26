import Icons from './utils/Icons.js';

// La ligne suivante devrait être au TOUT début du init() du Main

class Main {
  constructor() {
    this.init();
  }
  init() {
    Icons.load();
    console.log('done');
  }
}

new Main();
