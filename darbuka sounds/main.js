document.addEventListener('DOMContentLoaded', function() {
    const soundButtons = document.querySelectorAll('.sound-btn');
    const stopButton = document.querySelector('.stop-btn');

    soundButtons.forEach(button => {
        button.addEventListener('click', playSound);
    });

    stopButton.addEventListener('click', stopAllSounds);

    document.addEventListener('keydown', function(event) {
        const key = event.key.toUpperCase();
        const soundButton = document.querySelector(`.sound-btn[data-key="${key.charCodeAt(0)}"]`);
        if (soundButton) {
            playSound.call(soundButton);
        }
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

function stopAllSounds() {
    const sounds = document.querySelectorAll('audio');
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}
