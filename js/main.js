var menu = ['Брест', 'Витебск', 'Могилев', 'Минск', 'Гродно', 'Гомель', 'Минская']
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  speed: 1500,
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 2000,
   },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
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