var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slider-element");

    if (n > slides.length) 
        slideIndex = 1; 

    if (n < 1) 
        slideIndex = slides.length;
    
    for (var i = 0; i < slides.length; i++) 
        slides[i].style.display = "none";

    slides[slideIndex - 1].style.display = "block";    
}

//second slider for package

var packageSlideIndex = 1;
showPackageSlides(packageSlideIndex);

function plusPackageSlides(n) {
    showPackageSlides(packageSlideIndex += n);
}

function showPackageSlides(n) {
    var packageSlides = document.getElementsByClassName("slider-package-element");

    if (n > packageSlides.length) 
        packageSlideIndex = 1; 

    if (n < 1) 
        packageSlideIndex = packageSlides.length;
    
    for (var i = 0; i < packageSlides.length; i++) 
        packageSlides[i].style.display = "none";

    packageSlides[packageSlideIndex - 1].style.display = "block";     
}