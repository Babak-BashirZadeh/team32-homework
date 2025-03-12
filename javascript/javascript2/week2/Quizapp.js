const questions = [
    {
        question: "What is the capital of Denmark?",
        answers: [
          { text: "Berlin", isCorrect: false },
          { text: "Copenhagen", isCorrect: true },
          { text: "Madrid", isCorrect: false },
          { text: "Rome", isCorrect: false },
        ],
        explanation: "Copenhagen is the capital of Denmark.",
      },
];

const questionElement = document.getElementById("question");
const optionElements = document.querySelector("#answer-btn");
const nextButton = document.getElementById("nextbtn");
let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
    let score = 0;
    let currentQuestionIndex = 0;
    nextButton.innerText = "Next";
    displayQuestions();
}

function displayQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerText = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        optionElements.appendChild(button);
        if (answer.isCorrect) {
            button.dataset.correct = answer.isCorrect;
        }
        button.addEventListener("click", selectAnswer);
    });

function resetState() {
    nextButton.style.display = "none";
    while (optionElements.firstChild) {
        optionElements.removeChild(optionElements.firstChild);
    }

}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.style.backgroundColor = "green";
        score++;
    } else {
        selectedButton.style.backgroundColor = "red";
    }
    Array.from(optionElements.children).forEach((button) => {
        if (button.dataset.correct) {
            button.style.backgroundColor = "green";
        }
    });
    nextButton.style.display = "block";
}
}

function handleNextbtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestions();
    } else {
        alert("Quiz is over. Your score is " + score + " out of " + questions.length);

    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextbtn();
    } else {
        startQuiz();
    }
});
startQuiz();