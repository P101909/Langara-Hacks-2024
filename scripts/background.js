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