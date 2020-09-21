var currentQuestion;

var questions = {},
    currentScore = 0,
    gameOn = true,
    lastQuestion = [];

function addQuestion(text, options, ansInd) {
    questions[text] = {
        options: options,
        answer: ansInd,
    };
}

// Set Questions 
addQuestion("What is your last name?", ["Corson", "Biagioni", "Carsion"], 0);
addQuestion("What is your first name?", ["Jeremiah", "David", "James"], 1);
addQuestion("What is your age", ["25", "56", "109"], 0);
addQuestion("Fav Color?", ["Green", "Blue", "Red"], 2);
addQuestion("How cute is Bailey?", ["Very", "Extremely", "So Cute!!!"], 2);

function pickQuestion() {
    let questionText = Object.keys(questions);
    // If all questions have been asked, End the game
    if (questionText.length <= lastQuestion.length) {
        gameOn = false;
        return;
    }
    let selection;
    // Ensure that the question has not been asked before
    do {
        selection = Math.floor(Math.random() * questionText.length);
        selection = questionText[selection];
    } while (lastQuestion.includes(String(selection)));
    currentQuestion = selection;
}

function AskQuestion() {
    // If the game is over, Dont ask a question
    if (!gameOn) {return}
    let ops = questions[currentQuestion].options;
    let msg = "";

    // Display Options
    for (let i = 0; i < ops.length; i++) {
        msg += `${i + 1}. ${ops[i]}\n`;
    }
    console.log(msg);

    // Prompt for Answer
    let ans = prompt(currentQuestion);
    gameOn = ans === null ? false : true;
    let correctIndex = questions[currentQuestion].answer;

    // Eval whether True or False
    if (correctIndex === ans - 1) {
        console.log("Correct!");
        currentScore += 1;
        console.log(`Current Score: ${currentScore}`);
    } else {
        gameOn ? console.log("Nopers") : null;
    }
}

function init() {
    while (gameOn) {
        pickQuestion();
        AskQuestion();
        lastQuestion.push(String(currentQuestion));
        console.log(lastQuestion.length);
    }
    console.log(`Game Complete! Final Score = ${currentScore}`);
}

init();
