var audio = document.getElementById('audioPlayer');
    var muteButton = document.getElementById('muteButton');
    var muteIcon = document.getElementById('muteIcon');

    muteButton.addEventListener('click', function() {
      if (audio.muted) {
        audio.muted = false;
        muteIcon.classList.remove('bi-volume-mute-fill');
        muteIcon.classList.add('bi-volume-up-fill');
      } else {
        audio.muted = true;
        muteIcon.classList.remove('bi-volume-up-fill');
        muteIcon.classList.add('bi-volume-mute-fill');
      }
    });

    function playMusic() {
      // Espera 3 segundos antes de iniciar la reproducción
      setTimeout(function() {
        // Selecciona el elemento de audio
        var audioPlayer = document.getElementById("audioPlayer");
      
        // Inicia la reproducción
        audioPlayer.play();
      }, 3000); // 3000 milisegundos = 3 segundos
    }
// Función para manejar la descarga del mapa
function descargarMapa() {
  // Realiza cualquier operación adicional necesaria antes de la descarga

  // Simula una descarga
  alert("¡Mapa descargado!");

  // Puedes agregar aquí la lógica para preparar el mapa o manipular datos si es necesario

  // Finalmente, inicia la descarga del mapa
  var link = document.createElement("a");
  link.download = "./images/mapa.jpg";
  link.href = "./images/mapa.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Asigna la función descargarMapa al evento click del botón de descarga
document.getElementById("descargarMapa").addEventListener("click", descargarMapa);