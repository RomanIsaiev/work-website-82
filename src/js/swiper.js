import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.mySwiper1', {
  slidesPerView: 1.2,
  spaceBetween: 10,
  centeredSlides: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
