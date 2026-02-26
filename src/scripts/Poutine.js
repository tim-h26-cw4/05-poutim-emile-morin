export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = document.querySelectorAll('[data-component="poutine"]');
    this.selectedType = '';
    this.init();
  }
  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      console.log('yep');
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
    this.updatePhoto;
  }
  updatePhoto() {
    console.log('ye');
  }
}
