let start = 0;
otomatis();

function otomatis() {
  const sliders = document.querySelectorAll('.slider');

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = 'none';
  }
  if (start >= sliders.length) {
    start = 0;
  }

  sliders[start].style.display = 'flex';
  start++;

  setTimeout(otomatis, 3000);
}
