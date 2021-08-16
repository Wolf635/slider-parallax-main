// import { Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation } from 'swiper'
// Swiper.use([Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation])

// import { gsap, Power2 } from 'gsap'

document.addEventListener('DOMContentLoaded', () => {

  const swiperIMG = new Swiper('.slider-img', {
    loop: false,
    speed: 2400,
    parallax: true, /* включение режима parallax */
    pagination: {
      el: '.slider-pagination-count .total',
      type: 'custom', /* кастомные стили  */
      renderCustom: function (swiper, current, total) {
        return `0${total}`
      }
    }
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

  let curnum = document.querySelector('.slider-pagination-count .current')
  pagcur = document.querySelector('.slider-pagination-current__num')
  swiperText.on('slideChange', function () {
    let ind = swiperText.realIndex + 1
    gsap.to(curnum, .2, {
      force3D: true,
      y: -10, /* анимация цифры 01 вверх */
      opacity: 0,
      ease: Power2.easeOut,
      onComplete: function () {
        gsap.to(curnum, .1, {
          force3D: true,
          y: 10 /* анимация цифры 01 */
        })
        curnum.innerHTML = `0${ind}` /* выводим переменную из строки 60 */
        pagcur.innerHTML = `0${ind}` /* выводим переменную из строки 61 */
      }
    })
    gsap.to(curnum, .2, {
      forse3D: true,
      y: 0,
      opacity: 1,
      ease: Power2.easeOut, /* анимация */
      delay: .3 /* задержка времени */
    })
  })
})
