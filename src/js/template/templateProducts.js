function createMainSlide(imageObj) {
  return `
    <div class="swiper-slide">
      <div class="product__main-slide">
        <img
          class="product__image"
          src="${imageObj.src}"
          srcset="${imageObj.srcset}"
          alt="${imageObj.alt}"
        />
      </div>
    </div>
  `;
}

function createThumbSlide(imageObj) {
  return `
    <div class="swiper-slide">
      <div class="product__thumb-slide">
        <img
          class="product__image"
          src="${imageObj.src}"
          srcset="${imageObj.srcset}"
          alt="${imageObj.alt} preview"
        />
      </div>
    </div>
  `;
}

export { createMainSlide, createThumbSlide };
