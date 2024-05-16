document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-button').addEventListener('click', function() {
        document.querySelector('.container').classList.add('transicion');
        setTimeout(function() {
            window.location.href = '/quizz-javascript/preguntas/pregunta-3.html';
        }, 500);
    });
});

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === 'd') {
        document.querySelector('.d-quizz').style.backgroundColor = 'green';
        window.location.href = '/quizz-javascript/preguntas/pregunta-3.html'; 
    } else {
        document.querySelectorAll('.a-quizz, .b-quizz, .c-quizz, .d-quizz').forEach(function(button) {
            if (button.classList.contains('d-quizz')) {
                button.style.backgroundColor = 'green';
            } else {
                button.style.backgroundColor = 'red'; 
            }
        });
        setTimeout(function() {
            window.location.href = '/quizz-javascript/preguntas/pregunta-3.html';
        }, 1000); 
    }
}
