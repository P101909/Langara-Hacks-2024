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
                model: 'gpt-4',
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