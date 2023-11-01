let slideIndex=0;
function showSlides(){
const slides=document.getElementsByClassName("slide"); 
    // Hide all slides
    for (let i= 0; i<slides.length; i++) {
        slides[i].style.display ="none";
    }
    // Increment slideIndex and reset if necessary
    slideIndex++; 
    if (slideIndex>slides.length){
        slideIndex=1; 
    }
    // Display the current slide
    slides[slideIndex - 1].style.display ="block";
    // Call the function again after 2 seconds (adjust the time as needed)
    setTimeout(showSlides,1300); // Change slide every 2 seconds
}
// Start the slideshow when the page loads
window.onload = showSlides;
