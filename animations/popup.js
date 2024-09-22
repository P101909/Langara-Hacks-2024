document.getElementById('fetchButton').addEventListener('click', () => {
    // Send a message to the content script to fetch the score
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getDiv' }, (response) => {
            console.log("Response from content script:", response);

            const text = response["allTextString"]; 
            console.log(response)
            console.log(text)
            getScore(text).then((score) => { 

                calculateAffectionScore(parseInt(score));
            })
        });
    });

    console.log("THIS")
    console.log(meterFill)
});


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
