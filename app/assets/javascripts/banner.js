$(document).ready(function(){

  var biggestHeight = "0";
  $(".video_container *").each(function(){
    if ($(this).height() > biggestHeight ) {
      biggestHeight = $(this).height() - $(this).height()/3.5
    }
  });

  $(".video_container").height(biggestHeight)


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".top_menu").addClass("scrolling");
    } else {
      $(".top_menu").removeClass("scrolling")
    }
  })

  $('a#anchor').click(function(event){
    event.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top
     }, 500, 'swing');

  });

})


