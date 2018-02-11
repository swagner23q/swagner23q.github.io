$(document).ready(function(){

    var header = $('header'),
        btn    = $('button.toggle-nav');

    btn.on('click', function(){
      header.toggleClass('active');
    });

    $('.collapsible').collapsible();


    $(function() {
     $('a[href*="#"]:not([href="#"])').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html, body').animate({
             scrollTop: target.offset().top
           }, 1000);
           return false;
           }
         }
       });
     });


  });
