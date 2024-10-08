
function getDivInnerText() {
    // Select all divs with the class name 'x78zum5 xdt5ytf'
    const divs = document.querySelectorAll('div.x78zum5.xdt5ytf');

    // Create an array to store the innerText of the first div only
    let allText = [];

    if (divs.length > 0) {
        // Push the innerText of the first div into the array
        allText.push(divs[0].innerText);
    } else {
        console.log("No divs found with the specified class name.");
    }

    // Join the innerText into a single string
    let allTextString = allText.join(' ');

    return allTextString;
}

// window.addEventListener('load', async () => {
//     console.log("Loaded. test div");

//     const button = document.getElementById('fetchButton');

//     setInterval()
//     button.addEventListener('click', async () => {
//         console.log("Button clicked. Fetching div text and GPT-4 response...");
//         // button clicked
//     });

//     let text;
//     let new_next;
//     let intervalId;

//     // Delay querying the divs by 500 milliseconds
//     setTimeout(async () => {  // Add async here to use await inside
//         text = getDivInnerText();

//         try {
//             // Call the getScore function
//             const gptResponse = await getScore(text);

//             // Print GPT's response to the console
//             console.log(gptResponse);
//         } catch (error) {
//             console.error('Error getting GPT-4 response:', error);
//         }
//     }, 500); // 500 milliseconds delay

    

//     setTimeout(() => {
//         clearInterval(intervalId);
//         console.log("Stopped checking for messages div");
//     }, 60000); // 1 minute
// });


// Listener for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getDiv") {
        // Run the function and return the score
        const allTextString = getDivInnerText();
        console.log(allTextString)
        sendResponse({allTextString: allTextString});
        return true; // Keep the message channel open for async response
    }
});