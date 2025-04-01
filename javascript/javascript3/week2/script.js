// progress bar
const progressBar = document.querySelector(".progress-bar");
window.addEventListener("scroll", () => {
  const windowHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  progressBar.style.transform = `scaleX(${scrolled / 100})`;
});

// question array
let questions = [];


// DOM Elements
const quizForm = document.getElementById("quizForm");
const questionsContainer = document.getElementById("questionsContainer");
const randomizeButton = document.getElementById("randomizeOptions");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const sortAlphabeticalButton = document.getElementById("sortAlphabetical");
const sortRandomButton = document.getElementById("sortRandom");
const startGameButton = document.getElementById("startGame");
const gameArea = document.getElementById("gameArea");
const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");
const player1Display = document.getElementById("player1Display");
const player2Display = document.getElementById("player2Display");
const player1Score = document.getElementById("player1Score");
const player2Score = document.getElementById("player2Score");
const showQuestionsButton = document.getElementById("showQuestions");

// show questions
showQuestionsButton.addEventListener("click", (fetchdata) => {
  async function fetchdata() {
    try {
      const url = "https://raw.githubusercontent.com/Babak-BashirZadeh/quizappAPI/refs/heads/main/app.json";
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);
      questions = json.questions.concat(data);
      displayQuestions();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  /* fetch(url)
  .then((res) => res.json())
  .then((data) => {
    questions = questions.concat(data);
    displayQuestions();
  }); */
});

// form submit
quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const question = document.getElementById("question").value;
  const options = [
    { text: document.getElementById("option1").value, isCorrect: false },
    { text: document.getElementById("option2").value, isCorrect: false },
    { text: document.getElementById("option3").value, isCorrect: false },
    { text: document.getElementById("option4").value, isCorrect: false },
  ];

  const correctIndex = parseInt(
    document.querySelector('input[name="correct"]:checked').value
  );
  options[correctIndex].isCorrect = true;

  const explanation = document.getElementById("explanation").value;

  const newQuestion = {
    id: questions.length + 1,
    question,
    options,
    explanation,
  };

  questions.push(newQuestion);
  displayQuestions();
  quizForm.reset();
});

// display questions
function displayQuestions(questionsToShow = questions) {
  questionsContainer.innerHTML = "";

  questionsToShow.forEach((question) => {
    const questionCard = document.createElement("div");
    questionCard.className = "question-card";

    questionCard.innerHTML = `
            <h3>${question.question}</h3>
            <ul>
                ${question.options
                  .map(
                    (option) => `
                    <li class="option">${option.text}</li>
                `
                  )
                  .join("")}
            </ul>
            <h3 class="hidden">${question.explanation}</h3>
            <button class="reveal-btn" onclick="revealAnswer(${
              question.id
            })">Show Correct Answer</button>
        `;
             
    questionsContainer.appendChild(questionCard);
  });
}

// display correct answer
function revealAnswer(questionId) {
  const question = questions.find((q) => q.id === questionId);
  const questionCard = document.querySelector(
    `.question-card:nth-child(${questionId})`
  );
  const options = questionCard.querySelectorAll(".option");

  options.forEach((option, index) => {
    if (question.options[index].isCorrect) {
      option.classList.add("correct-answer");
    } else {
      option.classList.add("wrong-answer");
    }
  });

  const explanations = questionCard.querySelectorAll("h3");
  explanations.forEach((explanation) => {
    explanation.classList.remove("hidden");
  });
}

// randomize options
randomizeButton.addEventListener("click", () => {
  const options = Array.from(
    document.querySelectorAll(".options-container .form-group")
  );
  const shuffledOptions = options.sort(() => Math.random() - 0.5);

  const container = document.querySelector(".options-container");
  container.innerHTML = "";
  shuffledOptions.forEach((option) => container.appendChild(option));
});

// search questions
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredQuestions = questions.filter((q) =>
    q.question.toLowerCase().includes(searchTerm)
  );
  displayQuestions(filteredQuestions);
});

// alphabetical sort
sortAlphabeticalButton.addEventListener("click", () => {
  const sortedQuestions = [...questions].sort((a, b) =>
    a.question.localeCompare(b.question)
  );
  displayQuestions(sortedQuestions);
});

// randomized sort
sortRandomButton.addEventListener("click", () => {
  const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
  displayQuestions(shuffledQuestions);
});

// game management
let gameStarted = false;
let player1Points = 0;
let player2Points = 0;

startGameButton.addEventListener("click", () => {
  if (!player1Name.value || !player2Name.value) {
    alert("Please enter both player names");
    return;
  }

  gameStarted = true;
  gameArea.classList.remove("hidden");
  player1Display.textContent = player1Name.value;
  player2Display.textContent = player2Name.value;
  player1Score.textContent = "0";
  player2Score.textContent = "0";
  player1Points = 0;
  player2Points = 0;
});

// score management
document.querySelectorAll(".correct-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!gameStarted) return;

    const player = e.target.closest(".player1, .player2");
    if (player.classList.contains("player1")) {
      player1Points++;
      player1Score.textContent = player1Points;
    } else {
      player2Points++;
      player2Score.textContent = player2Points;
    }

    checkGameEnd();
  });
});

document.querySelectorAll(".wrong-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!gameStarted) return;

    const player = e.target.closest(".player1, .player2");
    if (player.classList.contains("player1")) {
      player2Points++;
      player2Score.textContent = player2Points;
    } else {
      player1Points++;
      player1Score.textContent = player1Points;
    }

    checkGameEnd();
  });
});

// end game check
function checkGameEnd() {
  if (player1Points >= 10 || player2Points >= 10) {
    const winner = player1Points >= 10 ? player1Name.value : player2Name.value;
    alert(`Game Over! ${winner} wins!`);
    gameStarted = false;
    gameArea.classList.add("hidden");
  }
}
