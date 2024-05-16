function checkAnswer(selectedAnswer, nextPage) {
    var correctAnswer = ''; 
    switch (nextPage) {
        case 'quizz-javascript\preguntas\pregunta-2.html':
            correctAnswer = 'a';
            break;
        case 'quizz-javascript\preguntas\pregunta-3.html':
            correctAnswer = 'd';
            break;
        case 'quizz-javascript\preguntas\pregunta-4.html':
            correctAnswer = 'c';
            break;
        case 'quizz-javascript\preguntas\pregunta-5.html':
            correctAnswer = 'd';
            break;
        case 'quizz-javascript\preguntas\pregunta-6.html':
            correctAnswer = 'a';
            break;
        case 'quizz-javascript\preguntas\pregunta-7.html':
            correctAnswer = 'd';
            break;
        case 'quizz-javascript\preguntas\pregunta-8.html':
            correctAnswer = 'd';
            break;
        case 'quizz-javascript\preguntas\pregunta-9.html':
            correctAnswer = 'b';
            break;
        case 'quizz-javascript\preguntas\pregunta-10.html':
            correctAnswer = 'a';
            break;
        case 'quizz-javascript\resultado.html':
            break;
        default:
            break;
    }

    if (selectedAnswer === correctAnswer) {
        document.querySelector('.' + selectedAnswer + '-quizz').style.backgroundColor = 'green';
        setTimeout(function() {
            window.location.href = '/quizz-javascript/preguntas/' + nextPage;
        }, 500);
    } else {
    }
}