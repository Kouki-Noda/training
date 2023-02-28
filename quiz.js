const answeresList=document.querySelectorAll('ol.answers li');

answeresList.forEach(li => li.addEventListener('click',checkClickedAnswer));

//正しい答え
const correctAnswers = {
    quiz1: 'B',
    quiz2: 'C',
    quiz3: 'C',
    quiz4: 'A',
    quiz5: 'D',
    quiz6: 'C',
    quiz7: 'B',
    quiz8: 'D',
    quiz9: 'C',
    quiz10: 'C',
    quiz11: 'A',
    quiz12: 'A',
    quiz13: 'A',
    quiz14: 'C',
    quiz15: 'A',
    quiz16: 'D',
    quiz17: 'A',
    quiz18: 'A',
    quiz19: 'B',
    quiz20: 'C',
    quiz21: 'C',
    quiz22: 'B',
    quiz23: 'D',
    quiz24: 'D',
    quiz25: 'D',
    quiz26: 'A',
    quiz27: 'A',
    quiz28: 'D',
    quiz29: 'C',
    quiz30: 'A',
    quiz31: 'C',
    quiz32: 'D',
    quiz33: 'B',
    quiz34: 'C',
    quiz35: 'A',
    quiz36: 'D',
    quiz37: 'B',
    quiz38: 'D',
};

function checkClickedAnswer(event) {
    //クリックされた答えの要素(liタグ)
    const clickedAnswerElement = event.currentTarget;
    //選択した答え(A,B,C,D)
    const selectedAnswer = clickedAnswerElement.dataset.answer;

    const quizId = clickedAnswerElement.closest('ol.answers').dataset.id;
    //正しい答え(A,B,C,D)
    const correctAnswer = correctAnswers[quizId]
    
    let message;
    let answereColorCode;

    if(selectedAnswer === correctAnswer){
        //正解
        message = '正解！おめでとう！！';
        answereColorCode = '';
    }else{
         //間違い
        message = 'ざんねん！不正解！！';
        answereColorCode = '#f05959';
    }

    alert(message);

    document.querySelector('span#correct-answer').style.color = answereColorCode
    document.querySelector('div#section-correct-answer').style.display = 'block';
}