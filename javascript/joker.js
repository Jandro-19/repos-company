const jokerCart = ['🎴', '🎴', '🎴', '🃏', '🎴', '🎴', '🎴'];
const joker = '🃏';

for (let i = 0; i < jokerCart.length - 1; i += 2) {
    jokerCart.splice(i + 1, 1, joker);
}

console.log(jokerCart.join(''));

