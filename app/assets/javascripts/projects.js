$(document).ready(function(){

    $(".flippable").click(function() {
    var front = $(this).children(".front");
    var back = $(this).children(".back");
    var toHide = front.is(':visible') ? front : back;
    var toShow = back.is(':visible') ? front : back;

    toHide.removeClass('flip in').addClass('flip out').hide();
    toShow.removeClass('flip out').addClass('flip in').show();

  });

})
