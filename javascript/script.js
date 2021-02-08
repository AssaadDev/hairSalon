var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

var x = document.getElementById("manList");
var y = document.getElementById("womanList");

function changeToMan() {
    if (x.style.display = "none") {
        if (y.style.display = "grid")
            y.style.display = "none"
        x.style.display = "grid"
    }
}


function changeToWoman() {
    if (y.style.display = "none") {
        if (x.style.display = "grid")
            x.style.display = "none"
        y.style.display = "grid"
    }
}
/*
var modal = document.getElementById("signin");
var prijava = document.getElementById("prijavi");

prijava.onclick = function() {
    modal.style.display = "block";
}*/
var modal = document.getElementById("signin");
var reg = document.getElementById("reg");
var blu = document.getElementById("xyz");

function singshow() {
    modal.style.display = "block";
    blu.style.filter = "blur(8px)";
}
/*
var reg = document.getElementById("reg");
var regbtn = document.getElementById("regme");

regbtn.onclick = function() {
    modal.style.display = "none";
    reg.style.display = "block";
}*/

function regopen() {
    modal.style.display = "none";
    reg.style.display = "block";
    blu.style.filter = "blur(8px)";
}

function iks() {
    if (modal.style.display = "block" == "block") {
        modal.style.display = "none";
        blu.style.filter = "none";
    }

    if (reg.style.display = "block" == "block") {
        reg.style.display = "none";
        blu.style.filter = "none";
    }
}