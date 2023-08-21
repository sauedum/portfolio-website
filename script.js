let slideIndex = 1;
let changeDisplay
let slides
let dots

/* Checks and change slides based on screen size */
const isDesktop = window.matchMedia("(max-width: 1024px)");
const checkResize = e => {
    /* Mobile view */
    if (e.matches) {
        /* Hide navigation bar when entering mobile view */
        document.getElementById("nav-bar").style.display = "none";
        
        let desktopSlides = document.getElementsByClassName("projectSlides");
        slides = document.getElementsByClassName("container-project");
        dots = document.getElementsByClassName("projects-dot-mobile");
        /* Reset styles when screen size changes */
        for (let i = 0; i < desktopSlides.length; i++) {
            desktopSlides[i].style.display = "flex";
        }
        for (let i = 0; i < slides.length; i++) {
        }
        changeDisplay = "inline-block";
        showSlides(slideIndex);
    }
    /* Desktop view */
    else {
        /* Reset navigation bar and button when entering desktop view */
        document.getElementById("nav-bar").style.display = "flex";
        document.getElementById("nav-button").className = "nav-button-deactive"

        let mobileSlides = document.getElementsByClassName("container-project");
        slides = document.getElementsByClassName("projectSlides");
        dots = document.getElementsByClassName("projects-dot-desktop");
        /* Reset styles when screen size changes */
        for (let i = 0; i < mobileSlides.length; i++) {
            mobileSlides[i].style.display = "inline-block";
        }
        changeDisplay = "flex";
        showSlides(slideIndex);
    }
}
isDesktop.addEventListener('change', e => checkResize(e));
checkResize(isDesktop);


showSlides(slideIndex);

// Next/previous controls
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = changeDisplay;
    dots[slideIndex-1].className += " active";
}
