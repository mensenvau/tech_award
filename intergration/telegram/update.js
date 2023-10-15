const { OpenGPT } = require("./anwer");
const { sendMessage } = require("./method");

let update = async (update) => {
    const client = require("..");

    if (update._ === 'updateNewMessage') {
        let msg = update.message;
        if (msg.sender_id._ === 'messageSenderUser') {
            if (msg.sender_id.user_id === 6245035185) return "It is myself!"
            if (msg.content._ === 'messageText') {
                OpenGPT(client, msg);
            } else {
                await sendMessage(client, msg.chat_id, 'Kechirasiz, men tushunmayman, bu nima?');
            }
        }
    }
}

module.exports = update