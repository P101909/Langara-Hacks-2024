document.getElementById('fetchButton').addEventListener('click', () => {
    // Send a message to the content script to fetch the score
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getDiv' }, (response) => {
            console.log("Response from content script:", response);
        });
    });

    console.log("THIS")
    console.log(meterFill)
});

