const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Add this line to import cors

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const msgHistoryPath = path.join(__dirname, 'msgHistory.json');

// Use CORS middleware to allow requests from other origins
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Function to update message history
function updateMsgHistory(role, content) {
    const history = JSON.parse(fs.readFileSync(msgHistoryPath, 'utf8'));

    const newMessage = {
        role: role,
        content: content
    };

    history.messages.push(newMessage);

    fs.writeFileSync(msgHistoryPath, JSON.stringify(history, null, 4));
}

// Function to call GPT-4 API using axios
async function getGPTResponse() {
    const apiKey = process.env.OPENAI_API_KEY;
    const history = JSON.parse(fs.readFileSync(msgHistoryPath, 'utf8'));
    
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4',
                messages: history.messages, // Send the full message history to GPT
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            }
        );
        
        const content = response.data.choices[0].message.content;
        updateMsgHistory('assistant', content);  // Update assistant's response in the history
        return content;
    } catch (error) {
        console.error('Error fetching GPT-4 response:', error);
        throw new Error(error.response?.data?.error?.message || 'Unknown error from GPT-4 API');
    }
}

// Route to handle chat requests
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: 'No message provided' });
    }

    try {
        // Update user message in the history
        updateMsgHistory('user', userMessage);

        // Get the GPT response based on the updated history
        const gptResponse = await getGPTResponse();

        // Respond with the GPT response and image URL
        res.json({ response: gptResponse});
    } catch (error) {
        console.error('Error processing chat request:', error);
        res.status(500).json({ error: 'Error processing chat request' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});