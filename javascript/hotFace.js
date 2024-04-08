const hotFace = ['🌶️', '🥛', '🌶️', '🥛', '🌶️', '🥛', '🌶️'];
const peper = '🌶️'; 
const hot = '🥵';

const hotFace2 = [];

for (let i = 0; i < hotFace.length; i++) {
    hotFace2.push(hotFace[i]);
    
    if (hotFace[i] === peper) {
        hotFace2.push(hot);
    }
}

console.log(hotFace2);
