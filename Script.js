const slides = document.querySelectorAll(".slider");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
const intervalTime = 3000; // Tempo em milissegundos (3 segundos)
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("on", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Inicia o intervalo de troca automática
function startSlideShow() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Para a troca automática ao interagir com as bolinhas
function stopSlideShow() {
  clearInterval(slideInterval);
}

// Adiciona eventos às bolinhas
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    stopSlideShow();
    currentIndex = parseInt(dot.getAttribute("data-index"));
    showSlide(currentIndex);
    startSlideShow();
  });
});

// Inicializa a primeira bolinha como ativa e começa o slideshow
showSlide(currentIndex);
startSlideShow();
