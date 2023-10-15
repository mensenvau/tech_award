const fetch = require('node-fetch');
const OpenAI = require('openai');

console.log(process.env.OPENAI_API_KEY);

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

let GPT = async (text, callback) => {
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: "Can you edit resume summary:" + text }],
            model: "gpt-3.5-turbo",
        });

        if (chatCompletion.error) return callback(chatCompletion.error, 0);
        callback(0, chatCompletion.choices[0].message.content);
    } catch (err) {
        callback(err, 0);
    }
}

let GPT2 = (text, callback) => {
    const requestBody = {
        model: 'gpt-3.5-turbo-instruct',
        prompt: "can you edit resume summary:" + text,
        max_tokens: 100,
        temperature: 0
    };
    console.log(process.env.OPENAI_API_KEY)

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    };

    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
        signal: AbortSignal.timeout(10000),
    }).then((response) => response.json()).then((data) => {
        console.log(data.error)
        if (data.error) return callback(data, 0);
        callback(0, data.choices[0].text);
    }).catch((error) => {
        console.log(error)
        callback(error, 0);
    });
}

module.exports = GPT