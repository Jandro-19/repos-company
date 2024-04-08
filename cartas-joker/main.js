const img1 = document.getElementById('imagen1');
const img2 = document.getElementById('imagen2');

img1.addEventListener('mouseout', function() {
    img1.src = "./img/card-back.png";
});

img1.addEventListener('mouseover', function() {
    img1.src = "./img/joker.png";
});

img2.addEventListener('mouseout', function() {
    img2.src = "./img/card-back.png";
});

img2.addEventListener('mouseover', function() {
    img2.src = "./img/as-picas.png";
});




const img3 = document.getElementById('imagen3');
const img4 = document.getElementById('imagen4');

img3.addEventListener('mouseout', function() {
    img3.src = "./img/card-back.png";
});

img3.addEventListener('mouseover', function() {
    img3.src = "./img/dos-corazones.png";
});

img4.addEventListener('mouseout', function() {
    img4.src = "./img/card-back.png";
});

img4.addEventListener('mouseover', function() {
    img4.src = "./img/ocho-picas.png";
});