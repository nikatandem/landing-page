// Llama a la función para iniciar la reproducción

const audioPlayer = document.getElementById("audioPlayer");
const toggleButton = document.getElementById("toggleButton");
const playIcon = document.getElementById("playIcon");

toggleButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playIcon.classList.remove("bi-volume-mute");
        playIcon.classList.add("bi-volume-up");
    } else {
        audioPlayer.pause();
        playIcon.classList.remove("bi-volume-up");
        playIcon.classList.add("bi-volume-mute");
    }
});
// Función para manejar la descarga del mapa
function descargarMapa() {
  // Realiza cualquier operación adicional necesaria antes de la descarga

  // Simula una descarga
  alert("¡Mapa descargado!");

  // Puedes agregar aquí la lógica para preparar el mapa o manipular datos si es necesario

  // Finalmente, inicia la descarga del mapa
  let link = document.createElement("a");
  link.download = "./images/mapa.jpg";
  link.href = "./images/mapa.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Asigna la función descargarMapa al evento click del botón de descarga
document.getElementById("descargarMapa").addEventListener("click", descargarMapa);

document.getElementById("playButton").classList.add("infinite-animation");
document.getElementById("descargarMapa").classList.add("infinite-animation");

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}