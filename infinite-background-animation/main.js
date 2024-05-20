document.addEventListener('DOMContentLoaded', function () {
    var bgMusic = document.getElementById('bgMusic');
    var volumeControl = document.getElementById('volumeControl');
    var soundPrint = document.querySelector('.sound-print');
  
    bgMusic.volume = volumeControl.value;
  
    volumeControl.addEventListener('input', function () {
      bgMusic.volume = volumeControl.value;
      
      if (volumeControl.value == 0) {
        soundPrint.src = "/infinite-background-animation/mute.png";
      } else {
        soundPrint.src = "/infinite-background-animation/sonido.png";
      }
    });
  });
  