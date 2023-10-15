const fetch = require('node-fetch');

const OPENAI_API_KEY = "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";

let GPT = (text, callback) => {
    const requestBody = {
        model: 'gpt-3.5-turbo-instruct',
        prompt: "can you edit resume summary:" + text,
        max_tokens: 7,
        temperature: 0
    };

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
    };

    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
        signal: AbortSignal.timeout(10000),
    }).then((response) => response.json()).then((data) => {
        if (data.error) return callback(data, 0);
        callback(0, data.choices[0].text);
    }).catch((error) => {
        callback(error, 0);
    });
}

module.exports = GPT