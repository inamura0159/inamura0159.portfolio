$(function(){
  $(window).scroll(function (){
    $('.content').each(function(){
      var top = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > top - windowHeight + 100){
        $(this).addClass('js_scroll');
      }
    });
  });
});

$(function(){
  $(window).scroll(function (){
    $('.media').each(function(){
      var top = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > top - windowHeight + 100){
        $(this).addClass('js_scroll');
      }
    });
  });
})
