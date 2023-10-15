/* .env  */
require('dotenv').config();

const { loginTelegram } = require('./auth');
const error = require('./error');
const update = require('./update');

(async () => {
    const { Client } = require('tdl');
    const { TDLib } = require('tdl-tdlib-addon');

    let file = process.platform === 'darwin' ? './td/build/libtdjson.dylib' : './td/build/libtdjson.so';
    const client = new Client(new TDLib(file), {
        apiId: 766400,
        apiHash: '21116393db58f84db436cdd0c0ab3d7e',
        databaseDirectory: "./config/app1/db",
        filesDirectory: "./config/app1/fs"
    });

    await loginTelegram(client);

    /* listening update  */
    client.on('update', update);

    /* listening error! */
    client.on('error', error);

    module.exports = client;
})();

