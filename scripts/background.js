// background.js
async function fetchApiKey() {
    try {
        const response = await fetch('http://localhost:3000/apikey'); // Replace with your server's actual address
        const data = await response.json();
        const apiKey = data.apiKey;

        console.log('Fetched API Key:', apiKey); // Print the fetched API key to the console
        return apiKey;
    } catch (error) {
        console.error('Error fetching API key:', error);
    }
}

async function sendMessageToGPT4(message) {
    const apiKey = await fetchApiKey();

    if (!apiKey) {
        console.error('API key not available');
        return;
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: message }],
        }),
    });

    const data = await response.json();
    console.log('Response from GPT-4:', data);
}

// Example usage
sendMessageToGPT4("Hello, GPT-4!");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'download') {
    const blob = new Blob([message.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Use the Chrome downloads API to save the file
    chrome.downloads.download({
      url: url,
      filename: 'extracted_text.txt', // Filename for the text file
      conflictAction: 'overwrite'
    }, () => {
      console.log('Text file saved from background script');
    });
  }
});
