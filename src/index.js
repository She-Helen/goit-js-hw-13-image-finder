import './styles.css';
import card from './templates/card.hbs';
import apiService from './js/apiService';
import { setTimeout } from 'core-js';

const formRef = document.getElementById('search-form');
const btnRef = document.querySelector('.button');
const galleryRef = document.querySelector('.gallery');
const screenHeight = document.documentElement.clientHeight - 80;

formRef.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  galleryRef.innerHTML = '';
  form.reset();
  apiService.resetPage();

  apiService.fetchImages().then(hits => {
    return updateMarkup(hits);
  });
  btnRef.classList.remove('is-hidden');
});

btnRef.addEventListener('click', e => {
  apiService
    .fetchImages()
    .then(hits => {
      return updateMarkup(hits);
    })
    .then(() =>
      setTimeout(() => {
        scrollBy({
          top: screenHeight,
          left: 0,
          behavior: 'smooth',
        });
      }, 800),
    );
});

function updateMarkup(params) {
  const markup = card(params);

  galleryRef.insertAdjacentHTML('beforeend', markup);
}
