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
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
