import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';
            const swiper = new Swiper(".swiper",{
              slidesPerview:3.5,
              spaceBetween:25,
              loop:true,
              speed:1000,
              simulateTouch:false,
          
              autoplay:{
                  delay:1000
              },
          
              navigation: {
                  nextEl:".swiper-button-next",
                  prevEl:".swiper-button-prev"
              },
             on: {realIndexChange:slideChange, init:swiperInit} });