window.addEventListener('load', () => {
    console.log("Page fully loaded");

    function checkForMessagesDiv() {
        const messagesDivs = document.querySelectorAll('div.x78zum5.xdt5ytf');
        const texts = [];

        // Iterate over each div and access its innerText
        messagesDivs.forEach((div) => {
            texts.push(div.innerText);
        });

        if (texts.length > 0) {
            // Convert the array of texts into a single string with each text on a new line
            const textContent = texts.join('\n');

            // Create a Blob from the text content
            const blob = new Blob([textContent], { type: 'text/plain' });

            // Create a temporary anchor element
            const a = document.createElement('a');
            const url = URL.createObjectURL(blob);
            a.href = url;
            a.download = 'extracted_text.txt';  // The filename

            // Append the anchor to the document, click it, and remove it
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);

            console.log('Text file saved directly via anchor tag.');
        } else {
            console.log("No divs with the specified class found.");
        }
    }

    // Check for the divs every 2 seconds
    const intervalId = setInterval(() => {
        checkForMessagesDiv();
    }, 2000);

    // Stop checking after 1 minute
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stopped checking for messages div.");
    }, 60000); // 1 minute
});
