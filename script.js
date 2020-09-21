var questions = {},
    currentScore = 0,
    gameOn = true;

var currentQuestion, lastQuestion;


function addQuestion(text, options, ansInd) {
    questions[text] = {
        options: options,
        answer: ansInd,
    };
}

addQuestion("What is your last name?", ["Corson", "Biagioni", "Carsion"], 0);
addQuestion("What is your first name?", ["Jeremiah", "David", "James"], 1);

function pickQuestion() {
    let questionText = Object.keys(questions);
    let selection = ''
    do {
        selection = Math.floor(Math.random()*questionText.length)
        selection = questionText[selection]
    } while (String(selection) === lastQuestion);
    // if (String(questionText[selection]) == lastQuestion) {pickQuestion()}
    lastQuestion = String(selection);
    currentQuestion = selection;
}

function AskQuestion() {
    let ops = questions[currentQuestion].options;
    let msg = "";
    for (let i = 0; i < ops.length; i++) {
        msg += `${i + 1}. ${ops[i]}\n`;
    }
    console.log(msg);
    let ans = prompt(currentQuestion);
    gameOn = ans === null ? false : true;
    let correctIndex = questions[currentQuestion].answer;
    if (correctIndex === ans - 1) {
        console.log("Correct!");
        currentScore +=1
        console.log(`Current Score: ${currentScore}`);
    } else {
        gameOn ? console.log("Nopers"): null;
    }
}

function init() {
    while (gameOn) {
        pickQuestion();
        AskQuestion();
    }
    console.log(`Game Complete! Final Score = ${currentScore}`);
}

init()

