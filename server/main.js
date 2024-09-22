// // server.js
// const express = require('express');
// const dotenv = require('dotenv');

// dotenv.config(); // Load API key from .env

// const app = express();
// const port = process.env.PORT || 3000;

// app.get('/apikey', (req, res) => {
//     res.json({ apiKey: process.env.OPENAI_API_KEY });
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });




// server.js

const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());

// Route to handle chat requests
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: 'No message provided' });
    }

    try {
        const gptResponse = await getGPTResponse(userMessage);
        res.json({ response: gptResponse });
    } catch (error) {
        console.error('Error fetching GPT-4 response:', error);
        res.status(500).json({ error: 'Error fetching GPT-4 response' });
    }
});

// Function to call GPT-4 API using axios
async function getGPTResponse(message) {
    const apiKey = process.env.OPENAI_API_KEY;
    
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4o-mini',
                messages: [{ role: 'user', content: message }],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        throw new Error(error.response?.data?.error?.message || 'Unknown error from GPT-4 API');
    }
}

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

async function fetchApiKey() {
    const data = {
        messages: messages_str //this is a string
    }

    try {
        const response = await fetch('http://localhost:3000/chat', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)   // Data is an object that contains the message
        }); // Replace with your server's address
        
        
        const data = await response.json();
        const apiKey = data.apiKey;

        console.log('Fetched API Key:', apiKey); // Print API key to console
        return apiKey;
    } catch (error) {
        console.error('Error fetching API key:', error);
        return null;
    }
}1