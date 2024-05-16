document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-button').addEventListener('click', function() {
        document.querySelector('.container').classList.add('transicion');
        setTimeout(function() {
            window.location.href = '/quizz-javascript/preguntas/pregunta-5.html';
        }, 500);
    });
});

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === 'c' || selectedAnswer === 'd') {
        document.querySelector('.' + selectedAnswer + '-quizz').style.backgroundColor = 'green';
    } else {
        document.querySelectorAll('.a-quizz, .b-quizz, .c-quizz, .d-quizz').forEach(function(button) {
            if (button.classList.contains('c-quizz') || button.classList.contains('d-quizz')) {
                button.style.backgroundColor = 'green';
            } else {
                button.style.backgroundColor = 'red'; 
            }
        });
    }

    // Transición y redirección después de 0.5 segundos, ajusta el tiempo según tus necesidades
    setTimeout(function() {
        window.location.href = '/quizz-javascript/preguntas/pregunta-5.html';
    }, 500);
}
