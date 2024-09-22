const meterFill = document.querySelector('.meter-fill');
const heart = document.querySelector('.heart');
const cryingFace = document.querySelector('.crying-face');

// let previousScore = 0;
// let affectionScore = 0;

// function calculateAffectionScore(score) {
//   affectionScore += score;
//   meterFill.style.width = `${affectionScore}%`;

//   // Show heart if the score has increased


//   // Update the previous score
//   previousScore = affectionScore;
//   return affectionScore;
// }

function showHeart() {
  heart.classList.add('show');
  setTimeout(() => heart.classList.remove('show'), 10000); // Hide after 10 seconds
}

function showCryingFace() {
  cryingFace.classList.add('show');
  setTimeout(() => cryingFace.classList.remove('show'), 10000); // Hide after 10 seconds
}

let affectionScore = 0;

function generateRandomNum () {
    return Math.floor(Math.random() * 201) - 100; 
}

function calculateAffectionScore(score) {
  console.log("current affection score: " + affectionScore)
  console.log("score to be added: " + score)
  affectionScore += score

  affectionScore = Math.max(0, Math.min(affectionScore, 100));
  meterFill.style.width = `${affectionScore}%`
  console.log("new affection score: " + affectionScore)

  if (affectionScore > previousScore) {
    showHeart();
  } else if (affectionScore < previousScore) {
    showCryingFace();
  }

  previousScore = affectionScore;

}

function updateMeter() {
  const randomScore = generateRandomNum()
  calculateAffectionScore(randomScore)
}

setInterval(updateMeter, 1000)


// Example usage: Increment or decrement affectionScore
// Call this function with the appropriate score change
// calculateAffectionScore(1); // Increment by 1
// calculateAffectionScore(-1); // Decrement by 1

