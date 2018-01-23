"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.env.API_URL = 'https://my-json-server.typicode.com/Xotabu4/demo';
const RAML = require("raml-1-parser");
let RAML_API = null;
function parseAPI(ramlFilePath = './../api.raml') {
    if (!RAML_API) {
        RAML_API = RAML.loadApiSync(ramlFilePath);
    }
    return RAML_API;
}
parseAPI();
// describe('Search', function () {
//     it('should be successful', async function () {
//         parseAPI()
//         // let res = await new APIRequest('/search').send()
//         // console.log(JSON.stringify(res))
//     })
// })  
//# sourceMappingURL=search.js.map