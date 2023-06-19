
var prevScroll = pageYOffset;
window.addEventListener("scroll", () => prevScroll = pageYOffset);
window.addEventListener("click", (e) => {
if (pageYOffset !== prevScroll) return;
e.preventDefault();
$(window).scrollTop(1760)

$(window).on('scroll', function(){
    if (window.scrollY > 100) {
      $('.logo').css('width', '100px');
      $('.logo').css('height','100px');
      $('.logo2').css('opacity','1');
      $('.logo').css('display','none');
      $('.Mainmenu').css('display','inline-block');
      $('header').css('height','100px');
      $('header').css('opacity','0.5');
    }
    else{
        $('.logo').css('width', '900px');
      $('.logo').css('height','900px');
      $('.logo2').css('opacity','0');
      $('.logo').css('display','block');
      $('.Mainmenu').css('display','none');
      $('header').css('height','900px');
      $('header').css('opacity','1');
    }
  });
});
