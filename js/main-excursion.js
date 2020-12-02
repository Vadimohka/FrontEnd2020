var menu = ['1', '2', '3', '4', '5']
var engmenu = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5']
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  speed: 1500,
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 10000,
   },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span style="border-radius: 50%; padding: 0px 15px;" class="' + className + '"id="' + (engmenu[index]) + '">' + (menu[index]) + '</span>';
      },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})