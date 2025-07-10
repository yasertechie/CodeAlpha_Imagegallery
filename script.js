let currentIndex = 0;
let images = [];

window.onload = function () {
  images = Array.from(document.querySelectorAll('.gallery img'));
};

function openLightbox(imgElement) {
  const src = imgElement.src;
  currentIndex = images.findIndex(img => img.src === src);
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('lightboxImg').src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('lightboxImg').src = images[currentIndex].src;
}

function filterImages(category) {
  const allBoxes = document.querySelectorAll('.image-box');
  allBoxes.forEach(box => {
    if (category === 'all' || box.classList.contains(category)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
}
