// quiz questions, submit buton, and high scores section all need to go in a place for the quiz
$('#start').on('click', function(){
    $('#start').remove();
//timer near top to keep it clean

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer, resultsContainer){

    
    showQuestions(questions, quizContainer);
}
    // show after

var myQuestions = [
    {
        question: "What is '3' + 2 +'1'?",
        answers: {
            a: '6',
            b: '51',
            c: '4',
            d: 'null'
        },
        correctAnswer: 'b'
    },
    {   
        question: "Which is NOT a loop functin in javascript?",
        answers: {
            a: 'this',
            b:  'for',
            c:  'while',
            d:  'do/while'
        },
        correctAnswer: 'a'
    },
    {
        question: "What way can we define a variable in Javascript?",
        answers: {
            a: 'if',
            b: 'const',
            c: 'log',
            d: 'null'
        },
        correctAnswer: 'b'
    },
    {   
        question: "Which is NOT a loop functin in javascript?",
        answers: {
            a: 'this',
            b:  'for',
            c:  'while',
            d:  'do/while'
        },
        correctAnswer: 'a'
    },
    {   
        question: "Which is not a data type supported by Javascript?",
        answers: {
            a: 'null',
            b:  'Boolean',
            c:  'var',
            d:  'symbol'
        },
        correctAnswer: 'var'
    },
];

// function showQuestions(questions, quizContainer)