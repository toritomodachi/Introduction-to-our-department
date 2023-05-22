$(window).on('scroll', function(){
    if (window.scrollY > 100) {
      $('.logo').css('width', '100px');
      $('.logo').css('height','100px');
      $('header').css('height','100px');
    }
  });