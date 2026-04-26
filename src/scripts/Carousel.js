import Swiper from 'swiper/bundle';
export default class Carousel {
  constructor(element) {
    this.element = element;
    console.log(this.element);
    this.options = {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
      },

      // Navigation arrows
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };

    this.init();
  }
  setOptions() {
    if ('split' in this.element.dataset) {
      console.log('OUI');

      this.options.slidesPerView = 2;
      this.options.breakpoints = {
        768: {
          slidesPerView: 2.5,
        },
      };
    }

    if ('autoplay' in this.element.dataset) {
      console.log('OUI');

      this.options.slidesPerView = 1;
      this.options.autoplay = {
        delay: 5000,
        disableOnInteraction: false,
      };
    }
    if ('loop' in this.element.dataset) {
      this.options.loop = true;
    }
    if ('slides' in this.element.dataset) {
      if (this.options.slidesPerView.parseInt) {
        this.options.slidesPerView = 'auto';
      }
    }
  }
  init() {
    this.setOptions();
    new Swiper(this.element, this.options);
  }
}

new Swiper();
