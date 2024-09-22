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


document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const meterFill = document.querySelector('.meter-fill');
  const sliderHandle = document.getElementById('slider-handle');

  function updateMeter() {
    const value = parseFloat(slider.value);
    const percentage = ((value + 100) / 200) * 100;
    const angle = (percentage / 100) * 360;

    // Update the meter fill (this example uses clip-path for visual effect)
    const clipPath = `polygon(50% 50%, 50% 0%, ${percentage}% 0%, ${percentage}% 100%, 0% 100%, 0% 50%)`;
    meterFill.style.clipPath = clipPath;

    // Update the slider handle position
    const radius = 150; // Half of the container's size
    const x = radius + radius * Math.cos((angle - 90) * Math.PI / 180);
    const y = radius + radius * Math.sin((angle - 90) * Math.PI / 180);
    sliderHandle.style.left = `${x}px`;
    sliderHandle.style.top = `${y}px`;
  }

  slider.addEventListener('input', updateMeter);

  // Initialize meter and handle position
  updateMeter();
});