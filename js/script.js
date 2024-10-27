const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const close = document.getElementById("close");
const aviso = document.getElementsByClassName("aviso");
for (let i = 0; i < aviso.length; i++) {
    close.addEventListener("click", function(){
        aviso[i].style.opacity = "0";
        setTimeout(() => {
            aviso[i].style.pointerEvents = "none";
            }, 500);
    });
}

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

