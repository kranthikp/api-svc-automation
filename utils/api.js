import * as endpoints from './const.js';
import { UTCctdt } from './utility.js';
const axios = require("axios");
import { postRequest } from "../../utils/utils";
//*************gettoken************** */
export function gettoken(uname, pwd) {
    return new Promise((resolve) => {
        let platformToken = '';
        const response = postRequest(url, data)
        platformToken = response.body.token
    });
    resolve(platformToken);
}


// For Resusable Methods using promises