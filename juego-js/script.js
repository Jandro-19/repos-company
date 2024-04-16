const clickButton = document.getElementById('clickButton');
const counter = document.getElementById('counter');
const apariciones = document.getElementById('apariciones');

let count = 0;
let aparicionesCount = 0;

clickButton.addEventListener('click', () => {
    count++;
    counter.textContent = count;

    if (count % 1 === 0) {
        aparicionesCount++;
        if (aparicionesCount <= 9   ) {
            const nuevaAparicion = document.createElement('img');
            nuevaAparicion.src = `img/aparicion-${aparicionesCount}.png`;
            nuevaAparicion.alt = `Aparición ${aparicionesCount}`;
            nuevaAparicion.classList.add('aparicion');
            apariciones.appendChild(nuevaAparicion);
        }
    }
});
