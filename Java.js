const slider = document.querySelector('.slider');
let slideIndex = 0;

function nextSlide() {
  if (slideIndex < 2) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Atur interval untuk mengubah slide setiap beberapa detik
setInterval(nextSlide, 3000); // Ubah setiap 3 detik (sesuaikan sesuai kebutuhan)
