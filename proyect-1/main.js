window.onload = function() {
    abrirModal();
};

function abrirModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}
function cerrarModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

var indiceImagenActual = 0;

function cambiarImagen() {
    var imagen = document.getElementById('car-class');

    var srcAlternativos = [
        "/proyect-1/img/car-1.png",
        "/proyect-1/img/car-2.png",
        "/proyect-1/img/car-3.png",
        "/proyect-1/img/car-5.png",
        "/proyect-1/img/car-6.png"
    ];

    indiceImagenActual = (indiceImagenActual + 1) % srcAlternativos.length;

    var siguienteSrc = srcAlternativos[indiceImagenActual];

    imagen.src = siguienteSrc;
}

var posX = 0;
var velocidadMovimiento = 10; 

function moverDerecha() {
    var imagen = document.getElementById('car-class');
    posX += velocidadMovimiento;
    imagen.style.left = posX + 'px';
    detectarColision();
}

function moverIzquierda() {
    var imagen = document.getElementById('car-class');
    posX -= velocidadMovimiento;
    imagen.style.left = posX + 'px';
    detectarColision();
}

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowRight':
            moverDerecha();
            break;
        case 'ArrowLeft':
            moverIzquierda();
            break;
    }
});

var modal = document.getElementById('myPopup');

function detectarColision() {
    var car = document.querySelector('.car');
    var carRect = car.getBoundingClientRect();
    var road = document.querySelector('.road');
    var roadRect = road.getBoundingClientRect();
    var grass = document.querySelector('.grass');
    var grassRect = grass.getBoundingClientRect();

    if (carRect.right > roadRect.right || carRect.left < roadRect.left) {
        if (carRect.bottom > grassRect.top) {
            modal.style.display = "block";
        }
    }
}
