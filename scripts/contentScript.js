

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
    let emptyCount = 0;

    // Loop through each div and extract the innerText
    for (let div of divs) {
        const innerText = div.innerText.trim(); // Get the text and trim whitespace

        // Check if the innerText is empty
        if (innerText === '') {
            emptyCount++;
        } else {
            emptyCount = 0; // Reset if a non-empty text is found
        }

        // If 5 consecutive empty spaces are found, stop adding to allText
        if (emptyCount >= 2) {
            console.log("Stopped adding text after encountering 2 consecutive empty spaces.");
            break;
        }

        allText.push(innerText);
    }
    
    // Join all innerText into a single string
    let allTextString = allText.join(' ');

    return allTextString;
}

window.addEventListener('load', async () => {
    console.log("Loaded. test div");
    // // Get innerText of all divs and print it to the console
    // let text = getDivInnerText();
    // let previousText = ''; // Store the previous text for comparison
    // console.log(text);


     // Delay querying the divs by 3 seconds (3000 milliseconds)
     setTimeout(() => {
        let text = getDivInnerText();
        console.log(text);
    }, 3000); // 3000 milliseconds = 3 seconds

    // try {
    //     // Call the getScore function from API_Manager.js
    //     const gptResponse = await getScore(text);

    //     // Print GPT's response to the console
    //     console.log(gptResponse);
    // } catch (error) {
    //     console.error('Error getting GPT-4 response:', error);
    // }

});
