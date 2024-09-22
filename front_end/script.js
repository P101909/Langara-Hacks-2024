// const weakSign = ["like", "handsome", "good looking", "good", "nice", "smart"]
// const strongSign = ["love", "miss"]
// const negativeSign = ["don't like", "hate", "dislike"]; // Negative phrases
// const textMessages = document.getElementById('text_box')
const meterFill = document.querySelector('.meter-fill')
const messageBox = document.querySelector('.message')
let affectionScore = 0;

function showMessage() {
  messageBox.textContent = "She LIKES you 100% !! Time to confess!!"
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
<<<<<<< HEAD
  // hit 100%? stops and shows the text box 
  if (affectionScore >= 100) {
    clearInterval(updateMeter)
    showMessage()
  }
  meterFill.style.width = `${affectionScore}%`

=======
  meterFill.style.width = ${affectionScore}%
>>>>>>> 0ec362587d557f293e391ddc90cf0a319d21f024
  console.log("new affection score: " + affectionScore)

}

function updateMeter() {
  const randomScore = generateRandomNum()
  calculateAffectionScore(randomScore)
}

<<<<<<< HEAD
let updateInterval = setInterval(updateMeter, 1000);

=======
setInterval(updateMeter, 10000)
>>>>>>> 0ec362587d557f293e391ddc90cf0a319d21f024



// function calculateAffection(text) {
//   let affectionScore = 0


//   weakSign.forEach(keyword => {
//     // create a regex to find the number of occurence 
//     const regex = new RegExp(keyword, 'gi'); // 'gi' global search + case in-sensitive 
//     // find all matches, count the number of occurence 
//     const matches = text.match(regex);
//     if (matches) {
//       affectionScore += matches.length * 10; // Add points for each occurrence
//     }
//   });

//   strongSign.forEach(keyword => {
//     // create a regex to find the number of occurence 
//     const regex = new RegExp(keyword, 'gi'); // 'gi' global search + case in-sensitive 
//     // find all matches, count the number of occurence
//     const matches = text.match(regex);
//     if (matches) {
//       affectionScore += matches.length * 20; // Add points for each occurrence
//     }
//   })

//   negativeSign.forEach(keyword => {
//     const regex = new RegExp(keyword, 'gi')
//     const matches = text.match(regex)
//     if (matches) {
//       affectionScore -= matches.length * 15
//     }
//   })
//     return Math.min(100, Math.max(-100,affectionScore))
// }


// textMessages.addEventListener('input', () => {
//   const message = textMessages.value;
//   const affectionScore = calculateAffection(message);
  
//   if (meterFill) {
//     meterFill.style.width = `${affectionScore}%`
//   }
// })
