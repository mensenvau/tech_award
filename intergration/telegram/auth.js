const read = require("./read");

let logOut = (client) => {
    return client.invoke({ _: 'logOut' });
}

let loginTelegram = async (client) => {
    /* start login part here!  */
    await client.login(() => ({
        getPhoneNumber: retry => retry ?
            Promise.reject('Invalid phone number') : '+998995441550', // Promise.resolve(read("Phone number Pls: ")),
        getAuthCode: retry => retry ?
            Promise.resolve(read("Invalid code again Pls: ")) : Promise.resolve(read("Code Pls: ")),
        getPassword: (passwordHint, retry) => retry ?
            Promise.resolve(read("Invalid password again Pls: ")) : Promise.resolve(read("Password Pls: "))
    }));

    /* Geting about me */
    //console.log('Me:', await client.invoke({ _: 'getMe' }));
}

module.exports = {
    logOut, loginTelegram
}; 