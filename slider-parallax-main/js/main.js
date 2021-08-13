// import { Swiper, Parallax } from 'swiper'
// Swiper.use([Parallax])

import { gsap, Power2 } from 'gsap'

document.addEventListener('DOMContentLoaded', () => {

  const swiperIMG = new Swiper('.slider-img', {
    loop: false,
    speed: 2400,
    parallax: true /* включение режима parallax */

  })

  const swiperText = new Swiper('.slider-text', {
    loop: false,  /* бесконечность слайдера отключена */
    speed: 2400,  /* скорость слайдера */
    mousewheel: { /* прокрутка слайдера с помощью колеса мыши */
      invert: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }
  })

  swiperIMG.controller.control = swiperText /* Синхронизируем оба слайдера вместе между собой */
  swiperText.controller.control = swiperIMG /* Синхронизируем оба слайдера вместе между собой */

  let gear = document.querySelector('.slider-gear')

  swiperText.on('slideNextTransitionStart', function () {
    gsap.to(gear, 2.8, {
      rotation: '+=40',
      ease: Power2.easeOut
    })
  })

  swiperText.on('slidePrevTransitionStart', function () {
    gsap.to(gear, 2.8, {
      rotation: '-=40',
      ease: Power2.easeOut
    })
  })

})