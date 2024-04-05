//! Añadir Cerveza

// let array = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥩"];
// let cerveza = "🍺";
// let pizza = false;

// for (let i = 0; i < array.length; i++) {
//     if (pizza) {
//         array[i] = cerveza;
//     }
//     if (array[i] === "🍕") {
//         pizza = true;
//     }
// }

// console.log(array);

//! Eliminar la Piña

// const buscarPiña = ['🍕', '🍕',  '🍕', '🍕', '🍕', '🍍'];
// const piña = '🍍';
// let encontrado = false;

// for (let i = 0; i < buscarPiña.length; i++ ) {
//     if (buscarPiña[i] === piña) {
//         buscarPiña.splice(i, 1);
//         encontrado = true;
//         break; 
//     }
// }
// console.log(buscarPiña);

//! Convertir Fresas en Setas

const buscarSeta = ['🍓', '🍋', '🍓', '🍋', '🍓'];

const modify = buscarSeta.map(fruta => {
    if (fruta === '🍓') {
        return '🍄'; 
    } else {
        return fruta; 
    }
});

console.log(modify); 


