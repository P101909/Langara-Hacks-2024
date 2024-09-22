

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

window.addEventListener('load', async () => {
    console.log("Loaded. test div");

    let text;
    let new_next;

    // Delay querying the divs by 500 milliseconds
    setTimeout(async () => {  // Add async here to use await inside
        text = getDivInnerText();

        try {
            // Call the getScore function
            const gptResponse = await getScore(text);
    
            // Print GPT's response to the console
            console.log(gptResponse);
        } catch (error) {
            console.error('Error getting GPT-4 response:', error);
        }
    }, 500); // 500 milliseconds delay

    // // Example of checking for changes every 500ms
    // const intervalId = setInterval(() => {
    //     new_next = getDivInnerText();
    //     if (text !== new_next) {
    //         text = new_next;
    //         console.log("Updated text:", text);
    //     }
    // }, 500);

    // Stop checking after 1 minute
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stopped checking for messages div");
    }, 60000); // 1 minute
});

//   // Delay querying the divs by 3 seconds (3000 milliseconds)
//   setInterval(() => {
//     const newText = getDivInnerText();
//     if (window.divInnerText) {
//         // If the old text is a subset of the new text
//         const newTextStartPoint = newText.indexOf(window.divInnerText);
    
//         if (newTextStartPoint !== 0) {
//             const textDiff = newText.substr(newTextStartPoint + window.divInnerText.length);
//             console.log({textDiff})
//         }
//     }
    
//     window.divInnerText = newText;
//     console.log({ divInnerText: window.divInnerText });
//  }, 500); // 3000 milliseconds = 3 seconds





