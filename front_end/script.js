const meterFill = document.querySelector('.meter-fill')
const messageBox = document.querySelector('.message')
let affectionScore = 0;


// message to be shown once it hits 100%
function showMessage() {
  messageBox.textContent = "She LIKES you 100% !! Time to confess!!"
  messageBox.style.display = 'block'
}

// generate random number, to be deleted once data feching function is implemented
function generateRandomNum () {
    return Math.floor(Math.random() * 100) 
}

// calculate the affection score, score is given by the AI model
function calculateAffectionScore(score) {
  console.log("current affection score: " + affectionScore)
  console.log("score to be added: " + score)
  affectionScore += score

  affectionScore = Math.max(0, Math.min(affectionScore, 100));
  // hit 100%? stops and shows the text box 
  if (affectionScore >= 100) {
    clearInterval(updateInterval)
    showMessage()
  }
  console.log("new affection score: " + affectionScore)
  return affectionScore

}

// update the meter
function updateMeter() {
  // to be deleted once implement data fetch from the AI model
  const randomScore = generateRandomNum()

  // calcualte the affection score
  calculateAffectionScore(randomScore)
  meterFill.style.width = `${affectionScore}%`
}

// keep running the meter 
let updateInterval = setInterval(updateMeter, 1000);
// meter gets updated every 1 second
setInterval(updateMeter, 10000)