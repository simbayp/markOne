const readlineSync = require("readline-sync");

let score = 0;

// quiz questions with answers
const questions = [{
    question: "Which country Elon Musk is originally form? ",
    answer: ["south africa", "sa"]
}, {
    question: "Which country Elon Musk currently lives in? ",
    answer: ["usa", "united states of america", "america"]
},
{
    question: "Which rocket company did Elon Musk create? ",
    answer: ["spacex"]
},
{
    question: "Which car company did Elon Musk create? ",
    answer: ["tesla"]
},
{
    question: "Which game Elon Musk wrote? ",
    answer: ["blastar"]
}
];

function begin() {
    let userName = readlineSync.question("What's your name? ");
    console.log(`Welcome ${userName} to DO YOU KNOW Elon Musk?`);
    console.log("----------")
}


function execute(question, answer) {
    let userAnswer = readlineSync.question(question);

    if (answer.includes(userAnswer.toLowerCase())) {
        console.log("You are correct!");
        score = score + 1;
    } else {
        console.log("You are incorrect!");
    }
    console.log(`Your current score is: ${score}`);
    console.log("----------")
}

function quiz() {
    for (let i = 0; i < questions.length; i++) {
        let currentQuestion = questions[i];
        execute(currentQuestion.question, currentQuestion.answer)
    }
}

function displayScore() {
    console.log(`Congratulations! Your total score is: ${score}`);
}


begin();
quiz();
displayScore();

