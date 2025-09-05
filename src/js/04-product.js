import Swiper from 'swiper';
import { Thumbs } from 'swiper/modules';
import productImages from './data/dataProducts';
import { createMainSlide, createThumbSlide } from './template/templateProducts';

function initSwipers() {
  const swiperThumbs = new Swiper('.product__thumbs', {
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    breakpoints: {
      1280: { slidesPerView: 5, spaceBetween: 0, direction: 'vertical' },
    },
  });

  const swiperMain = new Swiper('.product__inner', {
    modules: [Thumbs],
    slidesPerView: 1,
    spaceBetween: 0,
    thumbs: { swiper: swiperThumbs },
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
  });

  return { swiperMain, swiperThumbs };
}

function updateSliders({ colorKey, swiperMain, swiperThumbs }) {
  const product = productImages[colorKey];
  if (!product) return;

  const { price, images } = product;

  const priceElement = document.querySelector('.product__price');
  if (priceElement) {
    priceElement.textContent = price;
  }

  const swiperMainContainer = document.querySelector('.product__inner');
  const swiperThumbsContainer = document.querySelector('.product__thumbs');

  swiperMainContainer.classList.add('product__fade-out');
  swiperThumbsContainer.classList.add('product__fade-out');

  setTimeout(() => {
    if (typeof swiperMain.removeAllSlides === 'function') {
      swiperMain.removeAllSlides();
      swiperThumbs.removeAllSlides();
    } else {
      swiperMainContainer.querySelector('.product__wrapper').innerHTML = '';
      swiperThumbsContainer.querySelector('.product__wrapper').innerHTML = '';
    }

    images.forEach(imageObj => {
      const mainSlide = createMainSlide(imageObj);
      const thumbSlide = createThumbSlide(imageObj);

      if (typeof swiperMain.appendSlide === 'function') {
        swiperMain.appendSlide(mainSlide);
        swiperThumbs.appendSlide(thumbSlide);
      } else {
        swiperMainContainer.querySelector('.product__wrapper').innerHTML +=
          mainSlide;
        swiperThumbsContainer.querySelector('.product__wrapper').innerHTML +=
          thumbSlide;
      }
    });

    swiperMain.update();
    swiperThumbs.update();
    swiperMain.slideTo(0);

    swiperMainContainer.classList.remove('product__fade-out');
    swiperThumbsContainer.classList.remove('product__fade-out');
  }, 300);
}

function initColorSelection({ swiperMain, swiperThumbs }) {
  const colorButtons = document.querySelectorAll('.product__button');
  const defaultColorBtn = document.querySelector(
    '.product__button[data-color="color1"]'
  );

  if (defaultColorBtn) {
    defaultColorBtn.classList.add('product__selected');
  }

  colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      colorButtons.forEach(b => b.classList.remove('product__selected'));
      btn.classList.add('product__selected');
      const color = btn.dataset.color;
      updateSliders({ colorKey: color, swiperMain, swiperThumbs });
    });
  });
}

function initSizeSelection() {
  const sizeButtons = document.querySelectorAll('.product__sizes-btn');

  if (sizeButtons.length > 0) {
    sizeButtons[0].classList.add('product__selected');
  }

  sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeButtons.forEach(b => b.classList.remove('product__selected'));
      btn.classList.add('product__selected');
    });
  });
}

function initProductGallery() {
  const productSection = document.querySelector('.product');

  if (!productSection) return;

  const { swiperMain, swiperThumbs } = initSwipers();

  initColorSelection({ swiperMain, swiperThumbs });
  initSizeSelection();
  updateSliders({ colorKey: 'color1', swiperMain, swiperThumbs });
}

document.addEventListener('DOMContentLoaded', initProductGallery);
if (document.readyState !== 'loading') {
  initProductGallery();
}

export { initProductGallery };
