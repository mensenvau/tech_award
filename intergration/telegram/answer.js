const { sendMessage } = require("./method");

let OpenGPT = async (client, msg) => {
    try {
        let user_id = msg.sender_id.user_id;
        let chat_id = msg.chat_id;
        let text = msg.content.text.text;

        await sendMessage(client, chat_id, text);
    } catch {
        console.log("Error #0003: you have got error!");
    }
}

module.exports = {
    OpenGPT
}