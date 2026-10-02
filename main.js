// initialized variables
let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

// functions
function generateQuestion() {
    num1 = Math.floor(Math.random() * 11); // generates a random number for num1
    num2 = Math.floor(Math.random() * 11); // generates a random number for num2
    
    operator = operators[Math.floor(Math.random() * operators.length)]; // random operator

    if (operator === "+") {
        correctAnswer = num1 + num2;
    } else if (operator === "-") {
        correctAnswer = num1 - num2;
    } else if (operator === "*") {
        correctAnswer = num1 * num2;
    }

    document.getElementById('question').textContent = `${num1} ${operator} ${num2}`;
    document.getElementById('answer').value = "";
}

function checkAnswer() {
    const inputField = document.getElementById('answer');
    const messageDiv = document.getElementById('message');
    const userAnswer = Number(inputField.value);

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('score').textContent = score;
        messageDiv.textContent = "Correct!";
        messageDiv.style.color = "green";
    } else {
        messageDiv.textContent = `Wrong! Correct answer was ${correctAnswer}`;
        messageDiv.style.color = "red";
    }

    if (score === 5) {
        document.getElementById('div-questions').style.display = "none";
        document.getElementById('div-success').style.display = "block";
    } else {
        generateQuestion();
    }
}

function playAgain() {

    score = 0;
    document.getElementById('score').textContent = "0";
    document.getElementById('message').textContent = "";

    document.getElementById('div-questions').style.display = "block";
    document.getElementById('div-success').style.display = "none";

    generateQuestion();
}

// initialize the game 
generateQuestion();