let victoria = 0;
let empate = 0;
let derrota = 0;

function jugar(opcionJugador) {
    const opciones = ['Piedra', 'Papel', 'Tijera'];
    const opcionComputadora = opciones[Math.floor(Math.random() * 3)];
    
    const resultado = document.getElementById('resultado');

    if (opcionJugador === opcionComputadora) {
        resultado.textContent = `¡Es un empate! Ambos eligieron ${opcionJugador}.`;
        empate++;
    } else if (
        (opcionJugador === 'Piedra' && opcionComputadora === 'Tijera') ||
        (opcionJugador === 'Papel' && opcionComputadora === 'Piedra') ||
        (opcionJugador === 'Tijera' && opcionComputadora === 'Papel') 
    ) {
        resultado.textContent = `¡Ganaste! ${opcionJugador} vence a ${opcionComputadora}.`;
        victoria++;
    } else {
        resultado.textContent = `¡Perdiste! ${opcionComputadora} vence a ${opcionJugador}.`;
        derrota++;
    }

    actualizarMarcador();
}

function actualizarMarcador() {
    document.getElementById('victoria').textContent = `Victorias: ${victoria}`;
    document.getElementById('empate').textContent = `Empates: ${empate}`;
    document.getElementById('derrota').textContent = `Derrotas: ${derrota}`;
}