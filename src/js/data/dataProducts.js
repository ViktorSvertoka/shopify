// Color 1
import product01 from '/images/sections/03-product/product-01.webp';
import product01_2x from '/images/sections/03-product/product-01@2x.webp';
import product02 from '/images/sections/03-product/product-02.webp';
import product02_2x from '/images/sections/03-product/product-02@2x.webp';
import product03 from '/images/sections/03-product/product-03.webp';
import product03_2x from '/images/sections/03-product/product-03@2x.webp';
import product04 from '/images/sections/03-product/product-04.webp';
import product04_2x from '/images/sections/03-product/product-04@2x.webp';
import product05 from '/images/sections/03-product/product-05.webp';
import product05_2x from '/images/sections/03-product/product-05@2x.webp';

// Color 2
import product06 from '/images/sections/03-product/product-06.webp';
import product06_2x from '/images/sections/03-product/product-06@2x.webp';
import product07 from '/images/sections/03-product/product-07.webp';
import product07_2x from '/images/sections/03-product/product-07@2x.webp';
import product08 from '/images/sections/03-product/product-08.webp';
import product08_2x from '/images/sections/03-product/product-08@2x.webp';
import product09 from '/images/sections/03-product/product-09.webp';
import product09_2x from '/images/sections/03-product/product-09@2x.webp';
import product10 from '/images/sections/03-product/product-10.webp';
import product10_2x from '/images/sections/03-product/product-10@2x.webp';

// Color 3
import product11 from '/images/sections/03-product/product-11.webp';
import product11_2x from '/images/sections/03-product/product-11@2x.webp';
import product12 from '/images/sections/03-product/product-12.webp';
import product12_2x from '/images/sections/03-product/product-12@2x.webp';
import product13 from '/images/sections/03-product/product-13.webp';
import product13_2x from '/images/sections/03-product/product-13@2x.webp';
import product14 from '/images/sections/03-product/product-14.webp';
import product14_2x from '/images/sections/03-product/product-14@2x.webp';
import product15 from '/images/sections/03-product/product-15.webp';
import product15_2x from '/images/sections/03-product/product-15@2x.webp';

const ALT_TEXT = 'Nike Air Max Plus';

function makeImage(src, src2x) {
  return {
    src,
    srcset: `${src} 1x, ${src2x} 2x`,
    alt: ALT_TEXT,
  };
}

const productImages = {
  color1: {
    price: '$280.00',
    images: [
      makeImage(product01, product01_2x),
      makeImage(product02, product02_2x),
      makeImage(product03, product03_2x),
      makeImage(product04, product04_2x),
      makeImage(product05, product05_2x),
    ],
  },
  color2: {
    price: '$320.00',
    images: [
      makeImage(product06, product06_2x),
      makeImage(product07, product07_2x),
      makeImage(product08, product08_2x),
      makeImage(product09, product09_2x),
      makeImage(product10, product10_2x),
    ],
  },
  color3: {
    price: '$410.00',
    images: [
      makeImage(product11, product11_2x),
      makeImage(product12, product12_2x),
      makeImage(product13, product13_2x),
      makeImage(product14, product14_2x),
      makeImage(product15, product15_2x),
    ],
  },
};

export default productImages;
