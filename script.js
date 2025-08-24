
function filterVideos(category) {
  const cards = document.querySelectorAll(".video-card");
  cards.forEach(card => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function openLightbox(src) {
  document.getElementById("lightboxVideo").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("lightboxVideo").pause();
}
