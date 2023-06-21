const count=0;
if(count == 0){
var prevScroll = pageYOffset;
        //window.addEventListener("scroll", () => prevScroll = pageYOffset);
        window.addEventListener("click", (e) => {
        if (pageYOffset !== prevScroll) return;
        e.preventDefault();
        $(window).scrollTop(1760)
       
$(window).on('scroll', function(){
    if (window.scrollY > 100) {
      $('.logo').css('width', '100px');
      $('.logo').css('height','100px');
      $('header').css('height','100px');
      $('header').css('opacity','0.5');
    }
    else{
        $('.logo').css('width', '900px');
      $('.logo').css('height','900px');
      $('header').css('height','900px');
      $('header').css('opacity','1');
    }
    if (window.scrollY > 1060) {
      $('.Mainmenu').css('display','inline-block');
      $('.logo2').css('opacity','1');
      $('.logo').css('display','none');
    }
    else{
    $('.Mainmenu').css('display','none');
    $('.logo2').css('opacity','0');
    $('.logo').css('display','block');
    }
  });
});
conut++;
}
$(window).on('scroll', function(){
  if (window.scrollY > 100) {
    $('.logo').css('width', '100px');
    $('.logo').css('height','100px');
    $('header').css('height','100px');
    $('header').css('opacity','0.5');
  }
  else{
      $('.logo').css('width', '900px');
    $('.logo').css('height','900px');
    $('header').css('height','900px');
    $('header').css('opacity','1');
  }
  if (window.scrollY > 1060) {
    $('.Mainmenu').css('display','inline-block');
    $('.logo2').css('opacity','1');
    $('.logo').css('display','none');
  }
  else{
  $('.Mainmenu').css('display','none');
  $('.logo2').css('opacity','0');
  $('.logo').css('display','block');
  }
});