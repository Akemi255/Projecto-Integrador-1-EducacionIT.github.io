document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.querySelector('.custom-slider-container');
  const slides = document.querySelectorAll('.custom-slider-container > div');
  let currentSlide = 0;

  function showSlide() {
    const newTransformValue = -currentSlide * 100 + '%';
    sliderContainer.style.transform = 'translateX(' + newTransformValue + ')';
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
  }

  setInterval(nextSlide, 2000);
});