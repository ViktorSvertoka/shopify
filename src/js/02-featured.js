import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const featuredSliderConfig = {
  direction: 'horizontal',
  speed: 600,
  slidesPerView: 'auto',
  spaceBetween: 24,
  centeredSlides: false,

  navigation: {
    nextEl: '.featured__button--next',
    prevEl: '.featured__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  observer: true,
  observeParents: true,
  watchSlidesProgress: true,
};

const initFeaturedSlider = () => {
  const container = document.querySelector('.featured__swiper');
  if (!container) return;

  const featuredSwiper = new Swiper(container, {
    modules: [Navigation],
    ...featuredSliderConfig,
  });

  window.featuredSwiper = featuredSwiper;
  return featuredSwiper;
};

const bootstrapFeaturedSlider = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeaturedSlider);
  } else {
    setTimeout(initFeaturedSlider, 300);
  }
};

bootstrapFeaturedSlider();

export { initFeaturedSlider, featuredSliderConfig };
