// const { OpenGPT } = require("./anwer");
// const { sendMessage } = require("./method");


let update = async (update) => {
    const client = require("./index");
    const fs = require("fs")
    const path = require("path")


    if (update._ === 'updateNewMessage') {
        let msg = update.message;
        if (msg.sender_id.user_id === 6245035185) return "It is myself!"

        if (msg.chat_id == '-1001759189943') {
            if (msg.content && msg.content._ == 'messageText') {
                fs.writeFileSync(path.join(__dirname, "./data", `${msg.chat_id}_${msg.id}.txt`), msg.content.text.text, { encoding: "utf-8" })
            }
        } else {
            // await sendMessage(client, msg.chat_id, 'Kechirasiz, men tushunmayman, bu nima?');
        }
    }
}

module.exports = update