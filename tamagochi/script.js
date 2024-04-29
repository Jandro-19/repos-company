const barraPoderEat = document.getElementById('barra-poder-eat');
const barraPoderPlay = document.getElementById('barra-poder-play');
const barraPoderFight = document.getElementById('barra-poder-fight');
const barraPoderSleep = document.getElementById('barra-poder-sleep');
let porcentajeEat = 100;
let max = 100;

document.addEventListener('DOMContentLoaded', function() {  


    function reducirBarraEat() {
    
        porcentajeEat -= Math.floor(Math.random()*1.2);
        barraPoderEat.style.width = porcentajeEat + '%';
        porcentajeEat= Math.max(0,porcentajeEat);
        actualizarbarra();
    }

    function reducirBarraPlay() {
        let anchoActual = barraPoderPlay.offsetWidth;
        let nuevoAncho = anchoActual - 1; 
        if (nuevoAncho >= 0) {
            barraPoderPlay.style.width = nuevoAncho + 'px';
        } else {
            clearInterval(intervaloPlay);
        }
    }

    function reducirBarraFight() {
        let anchoActual = barraPoderFight.offsetWidth;
        let nuevoAncho = anchoActual - 1; 
        if (nuevoAncho >= 0) {
            barraPoderFight.style.width = nuevoAncho + 'px';
        } else {
            clearInterval(intervaloFight);
        }
    }

    function reducirBarraSleep() {
        let anchoActual = barraPoderSleep.offsetWidth;
        let nuevoAncho = anchoActual - 1; 

        if (nuevoAncho >= 0) {
            barraPoderSleep.style.width = nuevoAncho + 'px';
        } else {
            clearInterval(intervaloSleep);
        }
    }

    const intervaloEat = setInterval(reducirBarraEat, 60);
    const intervaloPlay = setInterval(reducirBarraPlay, 200);
    const intervaloFight = setInterval(reducirBarraFight, 500);
    const intervaloSleep = setInterval(reducirBarraSleep, 400);
});

function cambiarImagenYReiniciar() {
    cambiarImagen();

    reiniciarBarras();
}

function cambiarImagen() {
    var imagen = document.getElementById('imagen-personaje');
    
    var srcActual = imagen.src;
    
    var srcAlternativos = [
        "/tamagochi/img/zoro.png",
        "/tamagochi/img/sanji.png"
    ];
    
    var indiceActual = srcAlternativos.indexOf(srcActual);
    
    var siguienteIndice = (indiceActual + 1) % srcAlternativos.length;
    
    var siguienteSrc = srcAlternativos[siguienteIndice];
    
    imagen.src = siguienteSrc;
}

function reiniciarBarras() {
    document.getElementById('barra-poder-eat').style.width = '100%';
    document.getElementById('barra-poder-play').style.width = '100%';
    document.getElementById('barra-poder-fight').style.width = '100%';
    document.getElementById('barra-poder-sleep').style.width = '100%';
}
var indiceImagenActual = 0;

document.addEventListener('DOMContentLoaded', function() {
});

function cambiarImagenYReiniciar() {
    cambiarImagen();

    reiniciarBarras();
}

function cambiarImagen() {
    var imagen = document.getElementById('imagen-personaje');

    var srcAlternativos = [
        "/tamagochi/img/luffy.png",
        "/tamagochi/img/zoro.png",
        "/tamagochi/img/sanji.png",
        "/tamagochi/img/chopper.png",
        "/tamagochi/img/ussop.png"
    ];

    indiceImagenActual = (indiceImagenActual + 1) % srcAlternativos.length;

    var siguienteSrc = srcAlternativos[indiceImagenActual];

    imagen.src = siguienteSrc;
}

function sumarVida(monto) {
    porcentajeEat = Math.min(101, porcentajeEat);
    porcentajeEat += monto; 
    porcentajeEat = Math.min(porcentajeEat, max);
    actualizarbarra();
}

function actualizarbarra (){
 barraPoderEat.style.width = porcentajeEat + '%';
};
