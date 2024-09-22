// const meterFill = document.querySelector('.meter-fill');
// const heart = document.querySelector('.heart');
// const cryingFace = document.querySelector('.crying-face');


// function showHeart() {
//   heart.classList.add('show');
//   setTimeout(() => heart.classList.remove('show'), 10000); // Hide after 10 seconds
// }

// let affectionScore = 0;

// function generateRandomNum () {
//     return Math.floor(Math.random() * 201) - 100; 
// }

// function calculateAffectionScore(score) {
//   console.log("current affection score: " + affectionScore)
//   console.log("score to be added: " + score)
//   affectionScore += score

//   affectionScore = Math.max(0, Math.min(affectionScore, 100));
//   meterFill.style.width = `${affectionScore}%`
//   console.log("new affection score: " + affectionScore)

//   if (affectionScore > previousScore) {
//     showHeart();
//   }

//   previousScore = affectionScore;

// }

// function updateMeter() {
//   const randomScore = generateRandomNum()
//   calculateAffectionScore(randomScore)
// }

// setInterval(updateMeter, 1000)

const meterFill = document.querySelector('.meter-fill')
const messageBox = document.querySelector('.message')
let affectionScore = 0;

function showMessage100() {
  messageBox.textContent = "She LIKES you 100% !! Time to confess!!"
  messageBox.style.display = 'block'
}

function showMessage75(){
    messageBox.textContent = "She's almost your girl! You're right there"
    messageBox.style.display = 'block'
}

function showMessage50(){
    messageBox.textContent = "She's into you, keep going man!"
    messageBox.style.display = 'block'
}

function showMessage25(){
    messageBox.textContent = "She may interested in you, but you need more W rizz!"
    messageBox.style.display = 'block'
}

function generateRandomNum () {
    return Math.floor(Math.random() * 100) 
}

function calculateAffectionScore(score) {
  console.log("current affection score: " + affectionScore)
  console.log("score to be added: " + score)
  affectionScore += score

  affectionScore = Math.max(0, Math.min(affectionScore, 100));
  // hit 100%? stops and shows the text box 
  if (affectionScore >= 100) {
    clearInterval(updateInterval)
    showMessage100()
  }else if(affectionScore >= 75){
    clearInterval(updateInterval)
    showMessage75()
  }else if(affectionScore >= 50){
    clearInterval(updateInterval)
    showMessage50()
  }else if(affectionScore >= 25){
    clearInterval(updateInterval)
    showMessage25()
  }
  meterFill.style.width = `${affectionScore}%`
  console.log("new affection score: " + affectionScore)

}

function updateMeter() {
  const randomScore = generateRandomNum()
  calculateAffectionScore(randomScore)
}

let updateInterval = setInterval(updateMeter, 1000);
setInterval(updateMeter, 10000)