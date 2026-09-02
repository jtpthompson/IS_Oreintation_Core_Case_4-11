
// Find the buttons from the HTML
const careerButton = document.getElementById("careerButton");
const interviewButton = document.getElementById("interviewButton");

// Career Exploration button
careerButton.addEventListener("click", function() {
    window.location.href = "career.html";
});

// Interview Practice button
interviewButton.addEventListener("click", function() {
    window.location.href = "discovery.html";
});