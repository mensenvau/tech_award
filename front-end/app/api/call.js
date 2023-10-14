const { siteConfig } = require("@/config/site")

class CallApi {
    constructor() { }
    Header() {
        return {
            'Content-type': 'application/json',
            'Authentication': localStorage.getItem("token")
        }
    }

    GET = async (URL) => {
        try {
            const res = await fetch(`${siteConfig.apiURL}${URL}`, {
                method: "GET",
                headers: this.Header(),
                // cache: 'force-cache'
            });

            if (!res.ok) {
                throw new Error("ERROR CODE 2002, msg:" + err.message);
            }
            return await res.json();
        } catch (err) {
            throw new Error("ERROR CODE 2001, msg:" + err.message);
        }
    }

    POST = async (URL, BODY) => {
        try {
            const res = await fetch(`${siteConfig.apiURL}${URL}`, {
                method: 'POST',
                headers: this.Header(),
                body: JSON.stringify(BODY),
                // cache: 'force-cache'
            });

            if (!res.ok) {
                throw new Error("ERROR CODE 2002, msg:" + err.message);
            }
            return await res.json();
        } catch (err) {
            throw new Error("ERROR CODE 2002, msg:" + err.message)
        }
    }
}


export default new CallApi()