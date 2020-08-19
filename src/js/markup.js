import refs from './refs';
import card from '../templates/card.hbs';
import apiService from './apiService';

const screenHeight = document.documentElement.clientHeight - 115;

export default {
  updateMarkup(params) {
    const markup = card(params);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
  },
  updateMarkupOnSubmit() {
    this.cleanMarkup();
    apiService.resetPage();
    this.hideBtn();
    apiService.fetchImages().then(hits => {
      return this.updateMarkup(hits);
    });
    this.showBtn();
  },
  updateMarkupOnClick() {
    apiService
      .fetchImages()
      .then(hits => {
        return this.updateMarkup(hits);
      })
      .then(() =>
        setTimeout(() => {
          scrollBy({
            top: screenHeight,
            behavior: 'smooth',
          });
        }, 700),
      );
  },

  cleanMarkup() {
    refs.gallery.innerHTML = '';
  },
  hideBtn() {
    refs.btn.classList.add('is-hidden');
  },
  showBtn() {
    refs.btn.classList.remove('is-hidden');
  },
};
