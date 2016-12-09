

// Collapsing navba





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


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("Slides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {
        slideIndex = 1
    }

    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlides, 2000); // Change image every 2 seconds
}



// Sliders image centre

// j'ai 4 image
// je veux que les images défile de gauche à droite
// Je veux qu'une
