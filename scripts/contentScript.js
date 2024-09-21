
window.addEventListener('load', () => {
    console.log("Page fully loaded");

    function checkForMessagesDiv() {
        const messagesDivs = document.querySelectorAll('div.x78zum5, div.xdt5ytf');
        const texts = [];

        if (messagesDivs.length > 0) {
            messagesDivs.forEach((div) => {
                texts.push(div.innerText);
            });

            if (texts.length > 0) {
                // Convert the text array to a single string
                const textContent = texts.join('\n');

                // Save the text content as a file
                const blob = new Blob([textContent], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);

                chrome.downloads.download({
                    url: url,
                    filename: 'extracted_text.txt',
                    conflictAction: 'overwrite'
                }, () => {
                    console.log('Text file saved');
                });
            }
        } else {
            console.log("No relevant divs found, checking again...");
        }
    }

    // Check the DOM every 2 seconds (2000 milliseconds)
    const intervalId = setInterval(() => {
        checkForMessagesDiv();
    }, 2000);

    // Optional: Stop checking after a certain amount of time, e.g., 1 minute
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stopped checking for messages div");
    }, 60000); // 60000 ms = 1 minute
});




// require('dotenv').config();
// const apiKey = process.env.OPENAI_API_KEY;




// window.addEventListener('load', () => {
//     console.log("Page fully loaded2");


//     // Function to check for the div with class 'messages'
//     function checkForMessagesDiv() {
//         const messagesDiv = document.querySelector('.x9f619.x1ja2u2z.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.xdt5ytf.x6ikm8r.x10wlt62.x1n2onr6');

//         if (messagesDiv) {
//             console.log("Messages div found:", messagesDiv);
//             // You can perform your operations here, e.g., reading messages
//         } else {
//             console.log("Messages div not found, checking again...");
//         }
//     }

//     // Check the DOM every 2 seconds (2000 milliseconds)
//     const intervalId = setInterval(() => {
//         checkForMessagesDiv();
//     }, 2000);

//     // Optional: Stop checking after a certain amount of time, e.g., 1 minute
//     setTimeout(() => {
//         clearInterval(intervalId);
//         console.log("Stopped checking for messages div");
//     }, 60000); // 60000 ms = 1 minute
// });
