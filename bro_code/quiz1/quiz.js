let data = [ // this is question and options data
    {
        question: "What is 5 + 2?",
        options: [6, 7, 8],
        correct: 7,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter"],
        correct: "Mars",
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris"],
        correct: "Paris",
    },
];

// Variables initialized
let currentQuestionIndex = 0;
let score = 0;

// Storing variables for HTML locators
let question_variable = document.getElementById('question-paragraph');
let option_variable = document.getElementById('option-paragraph');
let next_button_variable = document.getElementById('next-button');
let submit_variable = document.getElementById('submit-button');
let result_variable = document.getElementById('result');

function loadfunction() {
    let current_question_variable = data[currentQuestionIndex];
    question_variable.textContent = current_question_variable.question;
    option_variable.innerHTML = '';

    // Creating options for every question
    current_question_variable.options.forEach((option) => {
        let option_label = document.createElement('label');
        let option_input = document.createElement('input');

        option_input.type = 'radio';
        option_input.name = 'answer';
        option_input.value = option;

        option_label.appendChild(option_input); // Fixed this line
        option_label.appendChild(document.createTextNode(option));
        option_variable.appendChild(option_label);
        option_variable.appendChild(document.createElement('br'));
    });
}

// Logic for the next button
next_button_variable.onclick = () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        const selectedAnswer = selectedOption.value;

        if (selectedAnswer == data[currentQuestionIndex].correct) { // Fixed variable name
            score++;
        }

        currentQuestionIndex++; // Fixed variable name

        if (currentQuestionIndex < data.length) { // Fixed variable name
            loadfunction(); // Fixed function name
        } else {
            next_button_variable.style.display = "none";
            submit_variable.style.display = "inline-block"; // Fixed variable name
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
};

// Logic for the "Submit" button
submit_variable.onclick = () => {
    result_variable.textContent = `You scored ${score} out of ${data.length}!`; // Fixed dataset name
    document.getElementById("question-box").style.display = "none";
    submit_variable.style.display = "none";
};

// Load the first question on page load
loadfunction();
