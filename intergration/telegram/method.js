let sendMessage = async (client, chat_id, text) => {
    try {
        await client.invoke({
            _: 'sendMessage',
            chat_id: chat_id,
            input_message_content: {
                _: 'inputMessageText',
                text: {
                    _: 'formattedText',
                    text: text
                }
            }
        });
    } catch {
        console.log("Error #0002: you have got error!");
    }
}

module.exports = { sendMessage }