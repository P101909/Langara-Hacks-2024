// script.js

// Optional: Control the animation on click
document.querySelector('.heart').addEventListener('click', function () {
    this.classList.toggle('active');
  });

  const weakSign = ["like", "handsome", "good looking", "good", "nice", "smart"]
  const strongSign = ["love", "miss"]
  const textMessages = document.getElementById('text_box')
  const affectionMeter = document.getElementById('meter')
  const heart = document.querySelector('.heart');

let previousScore = 0; // Track the previous affection score
  
function calculateAffection(text) {
    let affectionScore = 0;

    weakSign.forEach(keyword => {
        if (text.toLowerCase().includes(keyword)) {
            affectionScore += 5; // Increase score for each keyword
        }
    });

    strongSign.forEach(keyword => {
        if (text.toLowerCase().includes(keyword)) {
            affectionScore += 10;
        }
    });

    return Math.min(100, Math.max(0, affectionScore));
}

textMessages.addEventListener('input', () => {
    const message = textMessages.value;
    const currentScore = calculateAffection(message);
    
    affectionMeter.value = currentScore;

    // Show heart if the score has increased
    if (currentScore > previousScore) {
        heart.style.display = 'block';
    } else {
        heart.style.display = 'none';
    }

    // Update the previous score
    previousScore = currentScore;
});

  

  function createFace() {
    const face = document.createElement('div');
    face.classList.add('crying-face');
    
    // Add the face to the body
    document.body.appendChild(face);
    
    // Randomize the initial position and start animation
    face.style.top = `${randomFloat(0, 100)}vh`;
    face.style.left = `${randomFloat(0, 100)}vw`;
    
    // Apply animation
    face.style.animation = `float 5s ease-in-out forwards, fadeOut 5s ease-in forwards`;
    
    // Remove face after the animation ends (5s)
    setTimeout(() => {
        face.remove();
    }, 5000);
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function animateFaces() {
    const faces = document.querySelectorAll('.crying-face');

    faces.forEach(face => {
        // Random initial position
        face.style.top = `${randomFloat(0, 100)}vh`;
        face.style.left = `${randomFloat(0, 100)}vw`;

        // Apply CSS animation
        face.style.animation = `float 5s ease-in-out forwards, fadeOut 5s ease-in forwards`;
    });
}

// Run the animation when the page loads
window.onload = function() {
    animateFaces();
};


// Create a new face every second
setInterval(createFace, 1000);
