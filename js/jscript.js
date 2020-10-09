/* nav bar */

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 0 ) {
            $('.navbar').addClass('active');
            $('#top').hide();
        } else {
            $('.navbar').removeClass('active');
            $('#top').show();
        }
    });
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

/* slider */

$( document ).ready(function() {
  $('#testim-slider').owlCarousel({
      loop:true,
      autoplay:true,
      smartSpeed: 2000,
      margin:0,
      navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      autoplayTimeout:4000,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          768:{
              items:1,
              nav:false,
              dots: false
          },
          992:{
              items:2,
              nav:true,
              dots: false
          },
          1200:{
              items:2,
              nav:true,
              dots: false
          }
      }
  });
});

(function() {
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');

      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
          }
            
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();





