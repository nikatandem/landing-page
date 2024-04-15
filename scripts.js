let audio = document.getElementById('audioPlayer');
let muteButton = document.getElementById('muteButton');
let muteIcon = document.getElementById('muteIcon');

// Evento de clic en el botón de mute
muteButton.addEventListener('click', function() {
  if (audio.muted) {
    audio.muted = false;
    muteIcon.classList.remove('fa-volume-mute');
    muteIcon.classList.add('fa-volume-up');
  } else {
    audio.muted = true;
    muteIcon.classList.remove('fa-volume-up');
    muteIcon.classList.add('fa-volume-mute');
  }
});

// Función para iniciar la reproducción después de 3 segundos
function playMusic() {
  setTimeout(function() {
    audio.play();
  }, 3000);
}

// Llama a la función para iniciar la reproducción
playMusic();
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