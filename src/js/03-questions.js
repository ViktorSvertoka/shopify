import spriteUrl from '/icons/sprite.svg';

document.querySelectorAll('.questions__details').forEach(details => {
  const useTag = details.querySelector('.questions__use');
  const summary = details.querySelector('.questions__summary');

  useTag.setAttribute('href', `${spriteUrl}#plus`);

  summary.addEventListener('click', () => {
    setTimeout(() => {
      const current = useTag.getAttribute('href');
      if (details.open) {
        useTag.setAttribute('href', `${spriteUrl}#minus`);
      } else {
        useTag.setAttribute('href', `${spriteUrl}#plus`);
      }
    }, 0);
  });
});
