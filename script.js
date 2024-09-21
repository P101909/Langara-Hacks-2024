const weakSign = ["like", "handsome", "good looking", "good", "nice", "smart"]
const strongSign = ["love", "miss"]
const textMessages = document.getElementById('text_box')
const affectionMeter = document.getElementById('meter')


function calculateAffection(text) {
let affectionScore = 0


weakSign.forEach(keyword => {
if (text.toLowerCase().includes(keyword)) {
affectionScore += 5; // Increase score for each keyword
}
});


strongSign.forEach(keyword => {
if (text.toLowerCase().includes(keyword)){
affectionScore += 10
}
})


return Math.min(100, Math.max(0,affectionScore))
}


textMessages.addEventListener('input', () => {
const message = textMessages.value;
const affectionScore = calculateAffection(message)


affectionMeter.value = affectionScore
})
