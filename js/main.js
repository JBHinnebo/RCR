

// Collapsing navba

$('.icon').on('click', function(){

       $('.Nav-apparition').slideToggle(250);

   });

// this code command the resize of the navbar, making sure that if the screen is small the nav disapear and vise versa.

$(window).resize( function() {

   if ($(window).width() < 740) {
      $('.Nav-apparition').hide();
   }
   else {
      $('.Nav-apparition').show();
   };


});


$(document).ready(function(){

   $('body').append('<a href="#top" class="top_link waves-light" title="Revenir en haut de page">Haut de Page</a>');

         $(window).scroll(function(){
         // Permet de remonter en haut de page.
         posScroll = $(document).scrollTop();

         // Permet de faire apparaitre ou disparaitre le bouton.
             if(posScroll >=450)
                 $('.top_link').fadeIn(300);
             else
                 $('.top_link').fadeOut(300);
         });

});



// Slider manuel


var slideIndex = 1;


showDivs(slideIndex);

function plus(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var x = document.getElementsByClassName("article_carroussel");

    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}


// SLiders automatic



// Sliders image centre
