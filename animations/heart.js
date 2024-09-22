
// we need to make a function to fetch the data!!!! and change the other functions accordingly 
// For now, generateRandomNum generate random numbers raningng from -100 to 100, and those numbers are the input for "calculateAffectionscore" function.
// THings to do: 1. implement function that fetch data, 2: remove the randomNumberGenerator, 3: change other changes accordingly

const meterFill = document.querySelector('.meter-fill')
const messageBox = document.querySelector('.message')
let affectionScore = 0;

// message to be shown once it hits 100%
function showMessage100() {
    messageBox.textContent = "They LIKE you 100% !! Time to confess!!"
    messageBox.style.display = 'block'
}

function showMessage75() {
    messageBox.textContent = "They are almost your partner! You're right there"
    messageBox.style.display = 'block'
}

function showMessage50() {
    messageBox.textContent = "They are into you, keep going!"
    messageBox.style.display = 'block'
}

function showMessage25() {
    messageBox.textContent = "They may interested in you, but you need more W rizz!"
    messageBox.style.display = 'block'
}


// generate random number, to be deleted once data feching function is implemented
// function generateRandomNum() {
//     return Math.floor(Math.random() * 201) - 100
// }

// calculate the affection score, score is given by the AI model
function calculateAffectionScore(score) {
    // I have these 3 print statement for testing purpose, delete them once everything is done
    // console.log("current affection score: " + affectionScore)
    // console.log("score to be added: " + score)
    affectionScore = score

    affectionScore = Math.max(0, Math.min(affectionScore, 100));
    // hit 100%?, shows the text box, if you want to make the meter to stop once it hits 100%, uncomment the "clearInterval(updateInterval)
    if (affectionScore >= 100) {
        // clearInterval(updateInterval)
        showMessage100()
    } else if (affectionScore >= 75) {
        // clearInterval(updateInterval)
        showMessage75()
    } else if (affectionScore >= 50) {
        // clearInterval(updateInterval)
        showMessage50()
    } else if (affectionScore >= 25) {
        // clearInterval(updateInterval)
        showMessage25()
    }
    console.log("new affection score: " + affectionScore)
    return affectionScore
}

// update the meter
function updateMeter() {
    // to be deleted once implement data fetch from the AI model
    // const randomScore = generateRandomNum()
    
    // // calcualte the affection score
    // calculateAffectionScore(randomScore)
    meterFill.style.width = `${affectionScore}%`
}

let updateInterval = setInterval(updateMeter, 1000);
// // this makes the keep running infitenytly, 1000 = 1 sec, and meter gets updated every 1 second
setInterval(updateMeter, 10000)