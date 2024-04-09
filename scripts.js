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
