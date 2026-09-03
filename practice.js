// ==========================================================
// TECHNICAL INTERVIEW PRACTICE
// ==========================================================



// =====================================================
// BEHAVIORAL QUESTIONS
// =====================================================

const basicQuestions = [

    "Tell me about yourself.",
    "Why do you want to work for our company?",
    "What do you know about our company?",
    "Why are you interested in this position?",
    "What are your strengths?",
    "What is one weakness you are working on?",
    "Where do you see yourself in 5 years?",
    "Why should we hire you?",
    "What makes you different from other candidates?",
    "What are your career goals?"

];


const teamQuestions = [

    "Tell me about a time you worked on a team.",
    "How do you handle disagreements with coworkers?",
    "Tell me about a time you had to work with someone difficult.",
    "What role do you usually take on a team?",
    "How do you handle criticism or feedback?"

];


const situationalQuestions = [

    "Tell me about a time you made a mistake. What did you learn?",
    "Tell me about a time you solved a difficult problem.",
    "Tell me about a time you showed leadership.",
    "Tell me about a time you had to meet a tight deadline.",
    "How do you prioritize when you have multiple tasks?"

];



// =====================================================
// RANDOM QUESTION FUNCTION
// =====================================================

function getRandomQuestion(questionList) {

    const randomIndex =
        Math.floor(Math.random() * questionList.length);

    return questionList[randomIndex];

}



// Pick behavioral questions

const selectedBasicQuestion =
    getRandomQuestion(basicQuestions);

const selectedTeamQuestion =
    getRandomQuestion(teamQuestions);

const selectedSituationalQuestion =
    getRandomQuestion(situationalQuestions);



// Display behavioral questions

document.getElementById("basicQuestion").textContent =
    selectedBasicQuestion;

document.getElementById("teamQuestion").textContent =
    selectedTeamQuestion;

document.getElementById("situationalQuestion").textContent =
    selectedSituationalQuestion;



// =====================================================
// TECHNICAL SCENARIOS
// =====================================================

const technicalScenarios = [


    // =================================================
    // SCENARIO 1
    // =================================================

    {

        title: "Bird Food Simulation",

        code: `
import random

def simulateOneDay(self, numBirds):
    condition = random.random()

    if condition < 0.05:
        self.currentFood = 0

    else:
        eachBirdEats = int(random.random() * 41) + 10
        totalEaten = numBirds * eachBirdEats

        if totalEaten > self.currentFood:
            self.currentFood = 0

        else:
            self.currentFood -= totalEaten
        `,

        questions: [

            {
                question:
                    "What is the possible range of values for eachBirdEats?",

                options: [
                    "0–40",
                    "1–41",
                    "10–50",
                    "10–41"
                ],

                correct: 2,

                explanation:
                    "random.random() produces a number from 0 up to, but not including, 1. After multiplying by 41, converting to an integer, and adding 10, the possible values are 10 through 50."
            },

            {
                question:
                    "If condition is 0.03, what happens?",

                options: [
                    "Each bird eats 5 units",
                    "currentFood becomes 0",
                    "currentFood decreases by 5%",
                    "The method stops running"
                ],

                correct: 1,

                explanation:
                    "Because 0.03 is less than 0.05, the first if statement runs and currentFood is set to 0."
            },

            {
                question:
                    "Suppose there are 5 birds, each bird eats 20 units, and currentFood is 150. What will currentFood become?",

                options: [
                    "50",
                    "100",
                    "130",
                    "150"
                ],

                correct: 0,

                explanation:
                    "Five birds eating 20 units each consume 100 units. Starting with 150 leaves 50 units."
            }

        ]

    },



    // =================================================
    // SCENARIO 2
    // =================================================

    {

        title: "Student Grades",

        code: `
def calculateGrade(scores):
    total = 0

    for score in scores:
        total += score

    average = total / len(scores)

    if average >= 90:
        return "A"

    elif average >= 80:
        return "B"

    elif average >= 70:
        return "C"

    elif average >= 60:
        return "D"

    else:
        return "F"
        `,

        questions: [

            {
                question:
                    "If scores = [80, 90, 100], what will average be?",

                options: [
                    "80",
                    "85",
                    "90",
                    "100"
                ],

                correct: 2,

                explanation:
                    "80 + 90 + 100 = 270. Dividing 270 by 3 gives an average of 90."
            },

            {
                question:
                    "What does total += score do?",

                options: [
                    "Subtracts each score from total",
                    "Adds each score to total",
                    "Divides total by the score",
                    "Replaces total with the score"
                ],

                correct: 1,

                explanation:
                    "The += operator adds the current score to the value already stored in total."
            },

            {
                question:
                    "If scores are [70, 75, 80], what will the function return?",

                options: [
                    '"A"',
                    '"B"',
                    '"C"',
                    '"D"'
                ],

                correct: 2,

                explanation:
                    "The average is 75. Since 75 is at least 70 but less than 80, the function returns C."
            }

        ]

    },



    // =================================================
    // SCENARIO 3
    // =================================================

    {

        title: "Shopping Cart",

        code: `
def calculateTotal(prices):
    total = 0

    for price in prices:
        total += price

    if total >= 100:
        total *= 0.90

    return total
        `,

        questions: [

            {
                question:
                    "What is the purpose of the for loop?",

                options: [
                    "It removes prices from the list",
                    "It finds the cheapest price",
                    "It adds all the prices together",
                    "It multiplies every price by 2"
                ],

                correct: 2,

                explanation:
                    "The loop goes through every price and adds each one to the running total."
            },

            {
                question:
                    "If prices = [20, 30, 40], what will the function return?",

                options: [
                    "80",
                    "90",
                    "100",
                    "110"
                ],

                correct: 1,

                explanation:
                    "The prices add up to 90. Because 90 is less than 100, the discount is not applied."
            },

            {
                question:
                    "If prices = [50, 60], what will the function return?",

                options: [
                    "110",
                    "100",
                    "99",
                    "90"
                ],

                correct: 2,

                explanation:
                    "The total is 110. Since it is at least 100, the 10% discount is applied. 110 × 0.90 = 99."
            }

        ]

    }

];



// =====================================================
// RANDOMLY SELECT TECHNICAL SCENARIO
// =====================================================

const technicalRandomIndex =
    Math.floor(Math.random() * technicalScenarios.length);

const selectedScenario =
    technicalScenarios[technicalRandomIndex];



// =====================================================
// DISPLAY TECHNICAL QUESTIONS
// =====================================================

function displayTechnicalQuiz() {

    const container =
        document.getElementById("quizContainer");

    let html = `

        <div class="question">

            <h3>${selectedScenario.title}</h3>

            <pre><code>${selectedScenario.code}</code></pre>

        </div>

    `;


    selectedScenario.questions.forEach(
        (question, questionIndex) => {


            html += `

                <div class="question">

                    <h3>
                        Question ${questionIndex + 4}
                    </h3>

                    <p>
                        ${question.question}
                    </p>

            `;


            question.options.forEach(
                (option, optionIndex) => {


                    html += `

                        <label>

                            <input
                                type="radio"
                                name="technicalQ${questionIndex}"
                                value="${optionIndex}"
                            >

                            ${String.fromCharCode(65 + optionIndex)}.
                            ${option}

                        </label>

                    `;

                }

            );


            html += `
                </div>
            `;

        }

    );


    container.innerHTML = html;

}



// =====================================================
// SUBMIT FULL INTERVIEW
// =====================================================

function submitFullInterview() {


    const basicAnswer =
        document.getElementById("basicAnswer").value;

    const teamAnswer =
        document.getElementById("teamAnswer").value;

    const situationalAnswer =
        document.getElementById("situationalAnswer").value;



    // Check behavioral questions

    if (
        basicAnswer.trim() === "" ||
        teamAnswer.trim() === "" ||
        situationalAnswer.trim() === ""
    ) {

        document.getElementById("interviewResult").innerHTML = `

            <div class="results-section">

                <h2>Please Complete Your Interview</h2>

                <p>
                    Please answer all three behavioral questions
                    before submitting.
                </p>

            </div>

        `;

        return;

    }



    // Check technical questions

    for (
        let i = 0;
        i < selectedScenario.questions.length;
        i++
    ) {

        const selected =
            document.querySelector(
                'input[name="technicalQ' + i + '"]:checked'
            );

        if (!selected) {

            document.getElementById("interviewResult").innerHTML = `

                <div class="results-section">

                    <h2>Please Complete Your Interview</h2>

                    <p>
                        Please answer all three technical questions
                        before submitting.
                    </p>

                </div>

            `;

            return;

        }

    }



    // =================================================
    // BUILD TECHNICAL REVIEW
    // =================================================

    let technicalScore = 0;

    let technicalReviewHTML = "";


    selectedScenario.questions.forEach(
        (question, questionIndex) => {


            const selectedAnswer =
                document.querySelector(
                    'input[name="technicalQ' +
                    questionIndex +
                    '"]:checked'
                );


            const selectedValue =
                Number(selectedAnswer.value);


            if (selectedValue === question.correct) {
                technicalScore++;
            }



            let answerChoicesHTML = "";


            question.options.forEach(
                (option, optionIndex) => {


                    let answerClass = "normal-answer";
                    let labelText = "";


                    // Correct answer is always green

                    if (optionIndex === question.correct) {

                        answerClass = "correct-answer";

                        labelText = " ✓ Correct Answer";

                    }


                    // Wrong answer selected by user becomes red

                    if (
                        optionIndex === selectedValue &&
                        selectedValue !== question.correct
                    ) {
                    
                        answerClass = "wrong-answer";
                    
                        labelText = "";
                    
                    }


                    // Correct answer selected by user

                    if (
                        optionIndex === selectedValue &&
                        selectedValue === question.correct
                    ) {

                        labelText =
                            " ✓ Your Answer\ — Correct";

                    }


                    answerChoicesHTML += `

                        <p class="${answerClass}">

                            ${String.fromCharCode(65 + optionIndex)}.
                            ${option}

                            ${labelText}

                        </p>

                    `;

                }

            );



            technicalReviewHTML += `

                <div class="feedback-item">

                    <h3>
                        Question ${questionIndex + 4}
                    </h3>

                    <p>
                        <strong>
                            ${question.question}
                        </strong>
                    </p>


                    ${answerChoicesHTML}


                    <p>
                        <strong>Explanation:</strong>
                        ${question.explanation}
                    </p>

                </div>

            `;

        }

    );



    const technicalPercentage =
        Math.round(
            (technicalScore /
            selectedScenario.questions.length) * 100
        );



    // =================================================
    // DISPLAY FULL RESULTS
    // =================================================

    document.getElementById("interviewResult").innerHTML = `


        <h1 class="section-title">
            Your Interview Review
        </h1>


        <p>
            Review your full interview below.
        </p>



        <!-- ====================================== -->
        <!-- BEHAVIORAL REVIEW -->
        <!-- ====================================== -->


        <div class="results-section">

            <h2>
                Part 1 — Behavioral Interview Review
            </h2>



            <div class="feedback-item">

                <h3>
                    Question 1 — Basic Interview
                </h3>

                <p>
                    <strong>
                        ${selectedBasicQuestion}
                    </strong>
                </p>

                <p>
                    <strong>Your Response:</strong>
                </p>

                <div class="user-response">
                    ${basicAnswer}
                </div>

                <div class="feedback-placeholder">

                    <strong>
                        Behavioral Feedback:
                    </strong>

                    <p>
                        Feedback will appear here.
                    </p>

                </div>

            </div>



            <div class="feedback-item">

                <h3>
                    Question 2 — Working With Others
                </h3>

                <p>
                    <strong>
                        ${selectedTeamQuestion}
                    </strong>
                </p>

                <p>
                    <strong>Your Response:</strong>
                </p>

                <div class="user-response">
                    ${teamAnswer}
                </div>

                <div class="feedback-placeholder">

                    <strong>
                        Behavioral Feedback:
                    </strong>

                    <p>
                        Feedback will appear here.
                    </p>

                </div>

            </div>



            <div class="feedback-item">

                <h3>
                    Question 3 — Situational
                </h3>

                <p>
                    <strong>
                        ${selectedSituationalQuestion}
                    </strong>
                </p>

                <p>
                    <strong>Your Response:</strong>
                </p>

                <div class="user-response">
                    ${situationalAnswer}
                </div>

                <div class="feedback-placeholder">

                    <strong>
                        Behavioral Feedback:
                    </strong>

                    <p>
                        Feedback will appear here.
                    </p>

                </div>

            </div>

        </div>



        <!-- ====================================== -->
        <!-- TECHNICAL REVIEW -->
        <!-- ====================================== -->


        <div class="results-section">

            <h2>
                Part 2 — Technical Interview Review
            </h2>


            <h3>
                Technical Score:
                ${technicalScore}/3
                (${technicalPercentage}%)
            </h3>


            <h3>
                Scenario:
                ${selectedScenario.title}
            </h3>


            <p>
                <strong>
                    Original Code:
                </strong>
            </p>


            <pre><code>${selectedScenario.code}</code></pre>


            ${technicalReviewHTML}


        </div>

    `;



    // Scroll to results

    document
        .getElementById("interviewResult")
        .scrollIntoView({
            behavior: "smooth"
        });

}



// =====================================================
// LOAD TECHNICAL QUIZ
// =====================================================

displayTechnicalQuiz();





// ----------------------------------------------------------
// QUESTIONS
// ----------------------------------------------------------

const technicalQuestions = [
    {
        question: "What is the purpose of a primary key in a database?",
        answers: [
            "To uniquely identify each record in a table",
            "To store passwords securely",
            "To connect a database to the internet",
            "To automatically delete duplicate records"
        ],
        correct: 0
    },

    {
        question: "Which SQL command is used to retrieve data from a database?",
        answers: [
            "INSERT",
            "SELECT",
            "UPDATE",
            "DELETE"
        ],
        correct: 1
    },

    {
        question: "What does HTML primarily define?",
        answers: [
            "The structure and content of a webpage",
            "The visual styling of a webpage",
            "The database behind a website",
            "The security settings of a website"
        ],
        correct: 0
    },

    {
        question: "What is the primary purpose of CSS?",
        answers: [
            "To store information",
            "To create databases",
            "To control the appearance and layout of a webpage",
            "To run server-side code"
        ],
        correct: 2
    },

    {
        question: "What does JavaScript allow a webpage to do?",
        answers: [
            "Interact dynamically with users",
            "Replace the operating system",
            "Create physical hardware",
            "Automatically create a database"
        ],
        correct: 0
    }
];


// ----------------------------------------------------------
// QUIZ VARIABLES
// ----------------------------------------------------------

let currentQuestion = 0;
let score = 0;


// ----------------------------------------------------------
// DISPLAY QUIZ
// ----------------------------------------------------------

function displayTechnicalQuiz() {

    const quizContainer =
        document.getElementById("technicalQuiz");

    if (!quizContainer) {
        console.error(
            "Could not find #technicalQuiz in practice.html"
        );

        return;
    }


    // If there are no more questions,
    // show the final score.

    if (currentQuestion >= technicalQuestions.length) {

        displayTechnicalResults();

        return;
    }


    const question =
        technicalQuestions[currentQuestion];


    quizContainer.innerHTML = `

        <div class="question-container">

            <h3>
                Question ${currentQuestion + 1}
                of ${technicalQuestions.length}
            </h3>

            <p>
                ${question.question}
            </p>


            <div class="answer-options">

                ${question.answers.map((answer, index) => `

                    <label>

                        <input
                            type="radio"
                            name="technicalAnswer"
                            value="${index}"
                        >

                        ${answer}

                    </label>

                `).join("")}

            </div>


            <button
                id="submitTechnicalAnswer"
                type="button"
            >
                Submit Answer
            </button>

        </div>
    `;


    // ------------------------------------------------------
    // SUBMIT BUTTON
    // ------------------------------------------------------

    document
        .getElementById("submitTechnicalAnswer")
        .addEventListener("click", gradeTechnicalAnswer);
}


// ----------------------------------------------------------
// GRADE CURRENT QUESTION
// ----------------------------------------------------------

function gradeTechnicalAnswer() {

    const selected =
        document.querySelector(
            'input[name="technicalAnswer"]:checked'
        );


    // Make sure the user selected an answer.

    if (!selected) {

        alert("Please select an answer before continuing.");

        return;
    }


    const selectedAnswer =
        Number(selected.value);


    const correctAnswer =
        technicalQuestions[currentQuestion].correct;


    // Check answer.

    if (selectedAnswer === correctAnswer) {

        score++;

        alert("Correct!");

    } else {

        alert(
            "Not quite. The correct answer was: " +
            technicalQuestions[currentQuestion]
                .answers[correctAnswer]
        );
    }


    // Move to the next question.

    currentQuestion++;

    displayTechnicalQuiz();
}


// ----------------------------------------------------------
// DISPLAY FINAL RESULTS
// ----------------------------------------------------------

function displayTechnicalResults() {

    const quizContainer =
        document.getElementById("technicalQuiz");


    const percentage =
        Math.round(
            (score / technicalQuestions.length) * 100
        );


    quizContainer.innerHTML = `

        <div class="technical-results">

            <h2>Interview Complete!</h2>

            <p>
                You scored
                <strong>
                    ${score} / ${technicalQuestions.length}
                </strong>
            </p>

            <p>
                Score: ${percentage}%
            </p>


            <button
                id="restartTechnicalQuiz"
                type="button"
            >
                Try Again
            </button>

        </div>
    `;


    // ------------------------------------------------------
    // RESTART BUTTON
    // ------------------------------------------------------

    document
        .getElementById("restartTechnicalQuiz")
        .addEventListener("click", restartTechnicalQuiz);
}


// ----------------------------------------------------------
// RESTART QUIZ
// ----------------------------------------------------------

function restartTechnicalQuiz() {

    currentQuestion = 0;

    score = 0;

    displayTechnicalQuiz();
}


// ----------------------------------------------------------
// START QUIZ
// ----------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

    displayTechnicalQuiz();

});