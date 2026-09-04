// ----------------------------------------
// INTERACTIVE BUBBLE BACKGROUND
// ----------------------------------------


// Get the canvas
const canvas = document.getElementById("bubbleCanvas");
const ctx = canvas.getContext("2d");


// Store all of our bubbles
const bubbles = [];

// bubble colors
const bubbleColors = [
    "#00AE6B",
    "#F2283C",
    "#277DFF",
    "#D72E82",
    "#875AFB",
    "#FF7A00"
];

// Mouse / touch position
const pointer = {
    x: null,
    y: null,
    radius: 125
};


// ----------------------------------------
// RESIZE CANVAS
// ----------------------------------------

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// ----------------------------------------
// CREATE BUBBLES
// ----------------------------------------

function createBubbles() {

    const numberOfBubbles = 70;

    for (let i = 0; i < numberOfBubbles; i++) {

        bubbles.push({

            // Starting position
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,

            // Size
            radius: Math.random() * 70 + 30,

            // Movement
            dx: (Math.random() - 0.5) * 0.6,
            dy: (Math.random() - 0.5) * 0.6,

            // Color
            color: bubbleColors[
                Math.floor(Math.random() * bubbleColors.length)
            ],

            // How strongly the bubble reacts to touch
            pushX: 0,
            pushY: 0

        });

    }

}

createBubbles();


// ----------------------------------------
// DRAW A BUBBLE
// ----------------------------------------

function drawBubble(bubble) {

    const gradient = ctx.createRadialGradient(
        bubble.x - bubble.radius * 0.35,
        bubble.y - bubble.radius * 0.35,
        1,
        bubble.x,
        bubble.y,
        bubble.radius
    );

    // // Soft highlight
    // gradient.addColorStop(
    //     0,
    //     "rgba(255, 255, 255, 0.45)"
    // );

    // Main bubble color
    gradient.addColorStop(
        0.25,
        bubble.color
    );

    // Keep the color strong all the way to the edge
    gradient.addColorStop(
        1,
        bubble.color
    );

    ctx.beginPath();

    ctx.arc(
        bubble.x,
        bubble.y,
        bubble.radius,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = gradient;

    ctx.globalAlpha = 0.85;

    ctx.fill();

    ctx.globalAlpha = 1;
}


// ----------------------------------------
// UPDATE BUBBLE
// ----------------------------------------

function updateBubble(bubble) {

    // Normal floating movement
    bubble.x += bubble.dx;
    bubble.y += bubble.dy;


    // Apply the force caused by touching
    bubble.x += bubble.pushX;
    bubble.y += bubble.pushY;


    // Slowly remove the push force
    bubble.pushX *= 0.94;
    bubble.pushY *= 0.94;


    // ------------------------------------
    // SCREEN EDGES
    // ------------------------------------

    if (bubble.x - bubble.radius < 0) {

        bubble.x = bubble.radius;
        bubble.dx *= -1;

    }

    if (bubble.x + bubble.radius > canvas.width) {

        bubble.x = canvas.width - bubble.radius;
        bubble.dx *= -1;

    }

    if (bubble.y - bubble.radius < 0) {

        bubble.y = bubble.radius;
        bubble.dy *= -1;

    }

    if (bubble.y + bubble.radius > canvas.height) {

        bubble.y = canvas.height - bubble.radius;
        bubble.dy *= -1;

    }


    // ------------------------------------
    // REACT TO POINTER
    // ------------------------------------

    if (pointer.x !== null && pointer.y !== null) {

        const distanceX = bubble.x - pointer.x;
        const distanceY = bubble.y - pointer.y;

        const distance = Math.sqrt(
            distanceX * distanceX +
            distanceY * distanceY
        );


        if (distance < pointer.radius) {

            // Prevent division by zero
            const safeDistance = Math.max(distance, 1);

            // Calculate direction away from pointer
            const directionX = distanceX / safeDistance;
            const directionY = distanceY / safeDistance;

            // Stronger push when closer
            const force =
                (pointer.radius - distance) /
                pointer.radius;


            bubble.pushX += directionX * force * 3;
            bubble.pushY += directionY * force * 3;

        }

    }

}


// ----------------------------------------
// ANIMATION LOOP
// ----------------------------------------

function animate() {

    // Clear previous frame
    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // Update and draw every bubble
    bubbles.forEach(function(bubble) {

        updateBubble(bubble);
        drawBubble(bubble);

    });


    // Continue animation
    requestAnimationFrame(animate);

}


animate();


// ----------------------------------------
// MOUSE / TOUCH INTERACTION
// ----------------------------------------

// Mouse movement
window.addEventListener("mousemove", function(event) {

    pointer.x = event.clientX;
    pointer.y = event.clientY;

});


// Mouse leaves the browser window
window.addEventListener("mouseout", function(event) {

    // Only clear the pointer if it actually left the window
    if (!event.relatedTarget) {
        pointer.x = null;
        pointer.y = null;
    }

});


// Click / touch interaction
window.addEventListener("pointerdown", function(event) {

    pointer.x = event.clientX;
    pointer.y = event.clientY;

});


// Touch / finger movement
window.addEventListener("pointermove", function(event) {

    if (event.pointerType === "touch") {

        pointer.x = event.clientX;
        pointer.y = event.clientY;

    }

});


// Remove touch interaction when finger is lifted
window.addEventListener("pointerup", function(event) {

    if (event.pointerType === "touch") {

        pointer.x = null;
        pointer.y = null;

    }

});