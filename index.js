// Find the buttons
const careerButton = document.getElementById("careerButton");
const interviewButton = document.getElementById("interviewButton");

// Find the landing page
const landingPage = document.querySelector(".landing-page");


// ----------------------------------------
// PAGE TRANSITIONS
// ----------------------------------------

// Career Exploration
careerButton.addEventListener("click", function() {

    landingPage.classList.add("fade-out");

    setTimeout(function() {
        window.location.href = "discovery.html";
    }, 600);

});


// Interview Practice
interviewButton.addEventListener("click", function() {

    landingPage.classList.add("fade-out");

    setTimeout(function() {
        window.location.href = "practice.html";
    }, 600);

});


// ----------------------------------------
// FIX FOR BROWSER BACK BUTTON
// ----------------------------------------

window.addEventListener("pageshow", function() {

    // Remove the fade-out class when the page is shown
    landingPage.classList.remove("fade-out");

});