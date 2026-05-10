import Swiper from 'swiper/bundle';
export default class Carousel {
  constructor(element) {
    this.element = element;
    console.log(this.element);
    this.options = {
      slidesPerView: 1,
      spaceBetween: 20,
      clickable: true,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        clickable: true,
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
    if ('valeur' in this.element.dataset) {
      this.options.slidesPerView = 1;
      this.options.breakpoints = {
        1500: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 2,
        },
      };
    }

    if ('review' in this.element.dataset) {
      this.options.slidesPerView = 1;

      this.options.breakpoints = {
        700: {
          slidesPerView: 1.5,
          spaceBetween: 50,
        },
        1480: {
          slidesPerView: 2.5,
          spaceBetween: 80,
        },
      };

      this.options.navigation = {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      };

      this.options.pagination = {
        el: this.element.querySelector('.swiper-pagination'),
        clickable: false,
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
    if ('chambre' in this.element.dataset) {
      this.options.slidesPerView = 1.5;
      ((this.options.spaceBetween = 0),
        (this.options.autoplay = {
          delay: 5000,
        }));
      this.options.breakpoints = {
        1480: {
          slidesPerView: 2.5,
        },
      };
    }
  }
  init() {
    this.setOptions();
    new Swiper(this.element, this.options);
  }
}

new Swiper();
