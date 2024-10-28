const tooltipTriggerEl = document.querySelector('[data-bs-toggle="tooltip"]');
const tooltip = new bootstrap.Tooltip(tooltipTriggerEl);

document.body.addEventListener("mousemove", (event) => {
  if (tooltipTriggerEl.contains(event.target) === false) {
    tooltip.hide();
  }
});


// Aviso

const close = document.getElementById("close");
const aviso = document.getElementsByClassName("aviso");

for (let i = 0; i < aviso.length; i++) {  // Nota: Para todas las .aviso, opacidad 0.
    close.addEventListener("click", function(){
        aviso[i].style.opacity = "0";
        setTimeout(() => {
            aviso[i].style.pointerEvents = "none";
            }, 500);
    });
}


// Subtítulos

let videos = document.querySelectorAll("video");
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

modal.addEventListener("close", () => {
    tooltip.hide();
});

window.openModal = function() {
    modal.showModal();
    document.body.classList.add('no-scroll');
};

window.closeModal = function() {
    modal.close();
    video.pause();
    document.body.classList.remove('no-scroll');
};
