import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const featuredSliderSettings = {
  direction: "horizontal",
  speed: 600,
};

function initFeaturedSwiper() {
  const swiperContainer = document.querySelector(".featured__swiper");

  if (!swiperContainer) return;

  const featuredSwiper = new Swiper(".featured__swiper", {
    modules: [Navigation],
    ...featuredSliderSettings,

    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: false,

    navigation: {
      nextEl: ".featured__button--next",
      prevEl: ".featured__button--prev",
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
  });

  window.featuredSwiper = featuredSwiper;

  return featuredSwiper;
}

function initWhenReady() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFeaturedSwiper);
  } else {
    setTimeout(initFeaturedSwiper, 300);
  }
}

initWhenReady();

export { initFeaturedSwiper, featuredSliderSettings };
