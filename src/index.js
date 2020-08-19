import './styles.css';
import apiService from './js/apiService';
import markup from './js/markup';
import refs from './js/refs';

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  form.reset();
  markup.updateMarkupOnSubmit();
});

refs.btn.addEventListener('click', () => {
  markup.updateMarkupOnClick();
});
