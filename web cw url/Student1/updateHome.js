var i1 = 0;
var txt1 = 'Hello...!'

var speed1 = 100;

function myMain() {
    if (i1 < txt1.length) {
        document.getElementById("imageH1").innerHTML += txt1.charAt(i1);
        i1++;
        setTimeout(myMain, speed1);
    }
}


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlides, 2000);
}







