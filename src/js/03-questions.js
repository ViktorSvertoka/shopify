document.querySelectorAll('.questions__details').forEach(details => {
  const useTag = details.querySelector('.questions__use');
  const summary = details.querySelector('.questions__summary');

  summary.addEventListener('click', () => {
    setTimeout(() => {
      if (details.open) {
        useTag.setAttribute('href', '/icons/sprite.svg#minus');
      } else {
        useTag.setAttribute('href', '/icons/sprite.svg#plus');
      }
    }, 0);
  });
});
