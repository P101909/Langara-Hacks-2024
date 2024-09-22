const meterFill = document.querySelector('.meter-fill');
const heart = document.querySelector('.heart');
const cryingFace = document.querySelector('.crying-face');

let previousScore = 0;
let affectionScore = 0;

function calculateAffectionScore(score) {
  affectionScore += score;
  meterFill.style.width = `${affectionScore}%`;

  // Show heart if the score has increased
  if (affectionScore > previousScore) {
    showHeart();
  } else if (affectionScore < previousScore) {
    showCryingFace();
  }

  // Update the previous score
  previousScore = affectionScore;
  return affectionScore;
}

function showHeart() {
  heart.classList.add('show');
  setTimeout(() => heart.classList.remove('show'), 10000); // Hide after 10 seconds
}

function showCryingFace() {
  cryingFace.classList.add('show');
  setTimeout(() => cryingFace.classList.remove('show'), 10000); // Hide after 10 seconds
}

function updateMeter() {
    const randomScore = Math.random()
    calculateAffectionScore(randomScore)
  }
  
  setInterval(updateMeter, 1000)

// Example usage: Increment or decrement affectionScore
// Call this function with the appropriate score change
// calculateAffectionScore(1); // Increment by 1
// calculateAffectionScore(-1); // Decrement by 1

