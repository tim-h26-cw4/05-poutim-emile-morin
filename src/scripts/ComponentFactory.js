import Scrolly from './Scrolly.js';
import Carousel from './Carousel.js';
import Youtube from './Youtube.js';

export default class ComponentFactory {
  constructor(element) {
    this.componentList = {
      Scrolly: Scrolly,
      Carousel: Carousel,
      Youtube: Youtube,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      new this.componentList[componentName](element);
    }
  }
}
