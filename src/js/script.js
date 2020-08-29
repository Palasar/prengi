$(document).ready(function(){
    $('.header__slider').slick({
        arrows: false
    });
  });

$(document).ready(function(){
    $('.solution__slider_wrapper').slick({
        variableWidth: true,
      
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/solutions/arrow_for_slider_left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/solutions/arrow_for_slider_right.svg" alt=""></button>'
    });

    $('ul.solution__tab_nav').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.solution__tab').find('div.solution__slider').removeClass('solution__slider-active').eq($(this).index()).addClass('solution__slider-active');
      });
  });

