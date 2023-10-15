let slideIndex = 0;
showSlides();

// Next-previous control function
function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; // reset timer
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer; // reset timer
}

// Thumbnail image controlls function
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer; // reset timer
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // show one slide based on index number
  slides[slideIndex].style.display = "block";

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[slideIndex].classList.add("active");
}
