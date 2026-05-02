import Scrolly from './components/Scrolly.js';
import Carousel from './components/Carousel.js';
import Youtube from './components/Youtube.js';
import Form from './components/Form.js';
import Header from './components/Header.js';
export default class ComponentFactory {
  constructor(element) {
    this.componentList = {
      Scrolly,
      Carousel,
      Youtube,
      Form,
      Header,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      console.log(this.componentList);
      new this.componentList[componentName](element);
      console.log(componentName);
    }
  }
}
