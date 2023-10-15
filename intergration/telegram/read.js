let prompt = require('prompt');

let read = (text, type) => {
    console.log(text);
    return new Promise(async (resolve, reject) => {
        const { val } = await prompt.get('val');
        resolve(val);
    })
}

module.exports = read