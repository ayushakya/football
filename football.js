var myQuestions = [
    {
        question: "1. Which French team have made more European Cup finals than any other French team??",
        answers: {
            a: 'Stade de Reims',
            b: 'Paris Saint Germain',
            c: 'Lyon',
            d: 'AS Monaco'
        },
        correctAnswer: 'a'
    },
    {
        question: "2. Who has played in the Merseyside, Manchester, London, Intercontinental, El Classico and Le Classique derbies??",
        answers: {
            a: 'Zlatan Ibrahimovic',
            b: 'David Beckham',
            c: 'Nicolas Anelka',
            d: 'Geread Pique'
        },
        correctAnswer: 'c'
    },
    {
        question: '3. Which country is the only one which has two cities which has both provided 2 European Cup Semi Finalist teams??',
        answers: {
            a: 'England',
            b: 'Italy',
            c: 'Scotland',
            d: 'Germany'
        },
        correctAnswer: 'c'
    },
    {
        question: '4. Who was the first foreign player to score 100 Premiership goals??',
        answers: {
            a: 'Thiery Henry',
            b: 'Dwight Yorke',
            c: 'Eric Cantona',
            d: 'Dennis Bergkamp'
        },
        correctAnswer: 'b'
    },
    {
        question: '5. Aside from Real Madrid and Barcelona, who were the last Spanish team to win a domestic double??',
        answers: {
            a: 'Atletico Madrid',
            b: 'Sevilla',
            c: 'Valencia CF',
            d: 'Villareal'
        },
        correctAnswer: 'a'
    },
    {
        question: '6. Who are the only team who have won the European Cup more than their national League??',
        answers: {
            a: 'Atletico Madrid',
            b: 'Ajax Amsterdam',
            c: 'Real Madrid',
            d: 'Nottingham FOrest'
        },
        correctAnswer: 'd'
    },
    {
        question: '7. Which nation was the only undefeated team in the 2010 World Cup?',
        answers: {
            a: 'Spain',
            b: 'Germany',
            c: 'New Zealand',
            d: 'Slovakia'
        },
        correctAnswer: 'c'
    },
    {
        question: '8. Who was the youngest player, at 19 years old, selected for his national squad in the 2018 World Cup?',
        answers: {
            a: 'Kylian Mbappe',
            b: 'Daniel Arzani',
            c: 'Achraf Hakimi',
            d: 'Francis Uzoho'
        },
        correctAnswer: 'b'
    },
    {
        question: '9. Who is the only goalkeeper to score in the Champions League from open play?(non penalty/freekick)',
        answers: {
            a: 'Vincent Enyeama',
            b: 'Hans Jorg-Butt',
            c: 'Sinan Bolat',
            d: 'Dimitar Ikanov'
        },
        correctAnswer: 'c'
    },
    {
        question: '10. Who is the goalkeeper to have the record for the most consecutive clean sheets in UEFA Champions League matches?',
        answers: {
            a: 'Victor Valdes',
            b: 'Edwin Van der Sar',
            c: 'Iker Casillas',
            d: 'Jens Lehmann'
        },
        correctAnswer: 'd'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = 'You got ' + numCorrect + ' out of ' + questions.length + ' correct';
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}
