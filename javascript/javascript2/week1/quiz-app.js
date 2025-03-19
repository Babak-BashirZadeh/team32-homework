let correctIndex = -1;

function setCorrect() {
    correctIndex = parseInt(document.getElementById('correctAnswer').value);
    updateColors();
}

function updateColors() {
    const inputs = document.querySelectorAll('.answer');
    inputs.forEach((input, index) => {
        input.classList.remove('correct', 'wrong');
        if (index === correctIndex) {
            input.classList.add('correct');
        } else {
            input.classList.add('wrong');
        }
    });
}

function randomizeOptions() {
    const container = document.getElementById('options');
    const inputs = Array.from(container.children);
    inputs.sort(() => Math.random() - 0.5);
    container.innerHTML = '';
    inputs.forEach(input => container.appendChild(input));
}

function submitQuestion() {
    const questionText = document.getElementById('question').value.trim();
    const options = Array.from(document.querySelectorAll('.answer')).map((input, index) => ({
        text: input.value.trim(),
        isCorrect: index === correctIndex
    }))
    const explainationText = document.getElementById('explaination').value.trim();

    if (!questionText) {
        alert("Please enter a question.");
        return;
    }
    if (options.some(option => option.text === "")) {
        alert("Please fill in all options.");
        return;
    }
    if (correctIndex === -1) {
        alert("Please select the correct answer.");
        return;
    }
    if (!explainationText) {
        alert("Please enter an explanation.");
        return;
    }

    const quizQuestion = {
        id: Date.now(),
        question: questionText,
        options: options,
        explaination: explainationText,
    };

    console.log("Submitted Question:", quizQuestion);
    alert("Question submitted successfully!");
}