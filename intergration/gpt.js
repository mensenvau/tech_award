require("dotenv")
const fetch = require('node-fetch');

const OPENAI_API_KEY = "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";
const endpoint = 'https://api.openai.com/v1/chat/completions';

const requestBody = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Say this is a test!' }],
    temperature: 0.7,
};

const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_API_KEY}`,
};

fetch(endpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestBody),
})
    .then((response) => response.json())
    .then((data) => {
        if (data.error) return callbackify(0, 1)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
