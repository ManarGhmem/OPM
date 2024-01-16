import { OwlOptions } from 'ngx-owl-carousel-o';

export const customOptions: OwlOptions = {
  autoplay: true,
  smartSpeed: 1500,
  items: 1,
  dots: false,
  loop: true,
  nav: true,
  navText: [
    '<i class="bi bi-chevron-left"></i>',
    '<i class="bi bi-chevron-right"></i>',
  ],
};

export const slides = [
  { id: '1', img: 'assets/img/carousel-1.jpg' },
  { id: '2', img: 'assets/img/carousel-2.jpg' },
];

export const quotesOptions: OwlOptions = {
  autoplay: true,
  smartSpeed: 1500,
  center: true,
  margin: 24,
  dots: true,
  mouseDrag:true,
  // dotsData:true,
  loop: true,
  nav: false,
  // navSpeed:1000,
  // fluidSpeed:true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
};

export const quotes = [
  { id: '1', img: 'assets/img/testimonial-1.jpg' },
  { id: '2', img: 'assets/img/testimonial-2.jpg' },
  { id: '3', img: 'assets/img/testimonial-3.jpg' },
  { id: '4', img: 'assets/img/testimonial-4.jpg' },
];
