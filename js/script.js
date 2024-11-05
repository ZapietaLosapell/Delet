// Tooltip

const tooltipTriggerEl = document.querySelector('[data-bs-toggle="tooltip"]');
const tooltip = new bootstrap.Tooltip(tooltipTriggerEl);

document.body.addEventListener("mousemove", (e) => {
  if (tooltipTriggerEl.contains(e.target) === false) {
    tooltip.hide();
  }
});


// Aviso

const close = document.getElementById("close");
const aviso = document.getElementsByClassName("aviso");
const fixed1 = document.querySelector(".fixed-1");
const fixed2 = document.querySelector(".fixed-2");

for (let i = 0; i < aviso.length; i++) {
    close.addEventListener("click", () => {
        aviso[i].style.opacity = "0";
        setTimeout(() => {
            aviso[i].style.pointerEvents = "none";
            }, 500);
    });
}

fixed2.addEventListener("mouseover", function() {
  fixed1.classList.add("hover-opacity-1");
});

fixed2.addEventListener("mouseout", function() {
  fixed1.classList.remove("hover-opacity-1");
});



// Subtítulos

let videos = document.querySelectorAll(".teaser");
videos.forEach(video => {

    let track = video.addTextTrack("subtitles", "Subtitles", "en");
    track.mode = "showing";
    track.addCue(new VTTCue(0.2, 2.8, "In a world where everything is visible..."));
    track.addCue(new VTTCue(3.2, 7, "Some stories remain hidden, on the verge of extinction."));
    track.addCue(new VTTCue(8, 11.2, "Stories that hide right before our eyes."));
    track.addCue(new VTTCue(13, 14.6, "<b>Y¿Delet.exe</b>"));
    track.addCue(new VTTCue(16, 17.9, "<b>Do you want to run it?</b>"));

console.log(track.cues);
});


// Video de la ventana modal

const modal = document.getElementById("modal1");
const video = document.getElementById("teaser");

modal.addEventListener("close", function() {
  tooltip.hide();
});

window.openModal = function() {
    modal.showModal();
    document.body.classList.add("scroll");
};

window.closeModal = function() {
    modal.close();
    video.pause();
    document.body.classList.remove("scroll");
};


// Cierre del menu

const navbarCollapse = document.getElementById("navbarNav");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const transition = document.querySelector(".navbar-collapse");

transition.style.transition = ".5s ease-out";

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    transition.style.opacity = "0";
    setTimeout(() => {
        navbarCollapse.classList.remove("show");
        transition.style.opacity = "1";
    }, 500);
  });
});

document.querySelector(".btn-menu-icon").addEventListener("click", function() {
  this.classList.toggle("m");
});


// AOS

AOS.init();

AOS.init({
  duration: 400,
  easing: "ease-out-quart",
  offset: 200,
  once: true,
});


// Gif animado

const gif = document.getElementById("gif");
const gifMove = "img/tv-animacion.gif";
const gifStatic = "img/tv-animacion.png";

function pausarGif() {
    gif.src = gifStatic;
}

function reanudarGif() {
    gif.src = gifMove;
}


// Seguimiento del mouse

const lookFor = document.querySelector("#busca-play");
const targetVideo = document.querySelector(".video-tv-container");
const offsetX = 90, offsetY = -45;
let shown = false; 

targetVideo.addEventListener("mouseenter", () => {
  if (shown === false) {
    lookFor.style.display = "block";
    lookFor.style.opacity = 1;
    shown = true;
  }
});

targetVideo.addEventListener("mouseleave", () => {
  lookFor.style.opacity = 0;
    setTimeout(() => {
    lookFor.style.display = "none";
    }, 300);
});

targetVideo.addEventListener("mousemove", e => {
  const posicionX = e.clientX + offsetX;
  const posicionY = e.clientY + offsetY;
  lookFor.style.left = `${posicionX}px`;
  lookFor.style.top = `${posicionY}px`;
});
