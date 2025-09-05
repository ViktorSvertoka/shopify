const form = document.querySelector('.help__form');

form?.addEventListener('submit', event => {
  event.preventDefault();
  alert('Thank you!');
  form.reset();
});
