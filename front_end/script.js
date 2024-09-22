const weakSign = ["like", "handsome", "good looking", "good", "nice", "smart"]
const strongSign = ["love", "miss"]
const negativeSign = ["don't like", "hate", "dislike"]; // Negative phrases
const textMessages = document.getElementById('text_box')
const meterFill = document.querySelector('.meter-fill')


function calculateAffection(text) {
  let affectionScore = 0


  weakSign.forEach(keyword => {
    // create a regex to find the number of occurence 
    const regex = new RegExp(keyword, 'gi'); // 'gi' global search + case in-sensitive 
    // find all matches, count the number of occurence 
    const matches = text.match(regex);
    if (matches) {
      affectionScore += matches.length * 10; // Add points for each occurrence
    }
  });

  strongSign.forEach(keyword => {
    // create a regex to find the number of occurence 
    const regex = new RegExp(keyword, 'gi'); // 'gi' global search + case in-sensitive 
    // find all matches, count the number of occurence
    const matches = text.match(regex);
    if (matches) {
      affectionScore += matches.length * 20; // Add points for each occurrence
    }
  })

  negativeSign.forEach(keyword => {
    const regex = new RegExp(keyword, 'gi')
    const matches = text.match(regex)
    if (matches) {
      affectionScore -= matches.length *15
    }
  })
    return Math.min(100, Math.max(-100,affectionScore))
}


textMessages.addEventListener('input', () => {
  const message = textMessages.value;
  const affectionScore = calculateAffection(message);
  
  if (meterFill) {
    meterFill.style.width = `${affectionScore}%`
  }
})
