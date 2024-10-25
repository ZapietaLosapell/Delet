const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const close = document.getElementById("close");
const aviso = document.getElementsByClassName("aviso");
for (let i = 0; i < aviso.length; i++) {
    close.addEventListener("click", function(){
        aviso[i].style.opacity = "0";
      });
}

