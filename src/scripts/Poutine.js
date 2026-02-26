export default class Poutine {
  constructor(element) {
    this.element = element;
    console.log(this.element);
    this.types = document.querySelectorAll('[data-component="poutine"]');
    this.selectedType = '';
    this.init();
  }
  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];

      type.addEventListener('click', this.selectType.bind(this));
    }
  }
  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      console.log('yep');
      type.classList.remove('is-active');
    }
    event.currentTarget.classList.add('is-active');
    this.selectType = event.currentTarget.innerText;
    this.updatePhoto();
  }
  updatePhoto() {
    var image = this.element.querySelector('.poutine__image');
    console.log(image);
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectType}.png`;
  }
}
