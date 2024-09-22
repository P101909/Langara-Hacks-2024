

async function getScore(input) {
    try {
        const requestData = {
            message: input
        };

        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error('Server responded with an error: ' + response.statusText);
        }

        const responseData = await response.json();
        const gptResponse = responseData.response;

        return gptResponse;
    } catch (error) {
        console.error('Error fetching GPT-4 response:', error);
        return 'Error: Could not get score from GPT-4';
    }
}


// Function to get innerText of all divs with the given class names
function getDivInnerText() {
    // Select all divs with the class name 'x78zum5 xdt5ytf'
    const divs = document.querySelectorAll('div.x78zum5.xdt5ytf');

    // Create an array to store the innerText of each div
    let allText = [];
    
    // Loop through each div and extract the innerText
    divs.forEach(div => {
        allText.push(div.innerText);
    });
    
    // Join all innerText into a single string
    let allTextString = allText.join(' ');

    return allTextString;
}

window.addEventListener('load', async () => {
    console.log("Loaded. test div");
    // Get innerText of all divs and print it to the console
    let text = getDivInnerText();
    let previousText = ''; // Store the previous text for comparison

    try {
        // Call the getScore function from API_Manager.js
        const gptResponse = await getScore(text);

        // Print GPT's response to the console
        console.log(gptResponse);
    } catch (error) {
        console.error('Error getting GPT-4 response:', error);
    }

});

    


// function checkForMessagesDiv() {
//         const messagesDivs = document.querySelectorAll('div.x78zum5.xdt5ytf');
//         const texts = [];

//         // Iterate over each div and access its innerText
//         messagesDivs.forEach((div) => {
//             texts.push(div.innerText);
//         });

//         if (texts.length > 0) {
//             // Convert the array of texts into a single string with each text on a new line
//             const textContent = texts.join('\n');

//             // Create a Blob from the text content
//             const blob = new Blob([textContent], { type: 'text/plain' });

//             // Create a temporary anchor element
//             const a = document.createElement('a');
//             const url = URL.createObjectURL(blob);
//             a.href = url;
//             a.download = 'extracted_text.txt';  // The filename

//             // Append the anchor to the document, click it, and remove it
//             document.body.appendChild(a);
//             a.click();
//             setTimeout(() => {
//                 document.body.removeChild(a);
//                 window.URL.revokeObjectURL(url);
//             }, 0);

//             console.log('Text file saved directly via anchor tag.');
//         } else {
//             console.log("No divs with the specified class found.");
//         }
//     }

    // // Check for the divs every 2 seconds
    // const intervalId = setInterval(() => {
    //     checkForMessagesDiv();
    // }, 2000);

    // // Stop checking after 1 minute
    // setTimeout(() => {
    //     clearInterval(intervalId);
    //     console.log("Stopped checking for messages div.");
    // }, 60000); // 1 minute