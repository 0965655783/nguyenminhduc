$(document).ready(function () {
  $('.product-list').slick({
    arrows: true,
    dots: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
  });
});

$(document).ready(function () {
  $('.product-list_img').slick({
    // arrows: true,
    dots: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
// viet nut an cho len dau
var showTop = 100;
const btn = document.querySelector('.button-to-top');
$(window).scroll(function () {
  if ($(this).scrollTop() >= showTop) {
    $('.button-to-top').fadeIn();
  } else {
    $('.button-to-top').fadeOut();
  }
})
btn.addEventListener('click',function () {
  $('html,body').animate({scrollTop:0},'slow');
});

