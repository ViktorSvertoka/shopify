const createModal = (selector, showDelay = 1000) => {
  const modal = document.querySelector(selector);
  if (!modal) return null;

  const closeBtn = modal.querySelector('.modal__close');
  const form = modal.querySelector('.modal__form');
  const backdrop = modal.querySelector('.modal__backdrop');
  const wrapper = modal.querySelector('.modal__wrapper');

  let isVisible = false;

  const open = () => {
    modal.classList.add('modal__show');
    document.body.classList.add('modal__open');
    sessionStorage.setItem('modal__show', 'true');
    isVisible = true;
    closeBtn?.focus();
  };

  const close = () => {
    modal.classList.remove('modal__show');
    document.body.classList.remove('modal__open');
    isVisible = false;
  };

  closeBtn?.addEventListener('click', close);
  backdrop?.addEventListener('click', close);

  wrapper?.addEventListener('click', e => e.stopPropagation());

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isVisible) {
      close();
    }
  });

  form?.addEventListener('submit', e => {
    e.preventDefault();
    close();
    alert('Your email has been submitted.');
  });

  if (!sessionStorage.getItem('modal__show')) {
    setTimeout(open, showDelay);
  }

  return { open, close, isVisible: () => isVisible };
};

const initModal = () => {
  const modal = createModal('.modal', 1000);
  if (modal) window.modalInstance = modal;
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initModal);
} else {
  initModal();
}

export { createModal, initModal };
