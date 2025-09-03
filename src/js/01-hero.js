import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

const heroSliderSettings = {
  direction: "horizontal",
  speed: 3000,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
};

function initSwiper() {
  const swiperContainer = document.querySelector(".hero__slider");

  if (!swiperContainer) return;

  const heroSwiper = new Swiper(".hero__slider", {
    modules: [Pagination, Autoplay],
    ...heroSliderSettings,
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    init: false,

    pagination: {
      el: ".hero__pagination",
      clickable: true,
      type: "bullets",
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },

    observer: true,
    observeParents: true,

    on: {
      slideChange: function () {
        if (this.activeIndex === this.slides.length - 1) {
          setTimeout(() => {
            this.slideTo(0, this.params.speed);
          }, this.params.autoplay.delay);
        }
      },
      reachEnd: function () {
        setTimeout(() => {
          this.slideTo(0, this.params.speed);
        }, this.params.autoplay.delay);
      },
    },
  });

  setTimeout(() => {
    heroSwiper.init();
    heroSwiper.update();
  }, 100);

  window.heroSwiper = heroSwiper;
}

function runInit() {
  setTimeout(initSwiper, 200);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runInit);
} else {
  runInit();
}
