document.addEventListener('DOMContentLoaded', function() {
    const soundButtons = document.querySelectorAll('.sound-btn');
    soundButtons.forEach(button => {
        button.addEventListener('click', playSound);
    });
});

function playSound() {
    const soundId = this.dataset.sound;
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0; 
        sound.play();
    }
}
