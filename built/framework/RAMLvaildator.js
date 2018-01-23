"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RAML = require("raml-1-parser");
const url_1 = require("url");
const URItemplate = require("uri-templates");
let RAML_API = null;
function parseAPI(ramlFilePath = '../api.raml') {
    if (!RAML_API) {
        RAML_API = RAML.loadApiSync(ramlFilePath, { rejectOnErrors: true });
    }
    return RAML_API;
}
function getResponseBodyDeclaration(uri, methodName = 'get', statusCode = '200') {
    try {
        console.log('3');
        let API = parseAPI();
        let parsedURL = new url_1.URL(uri); // .pathname
        console.log('4');
        for (let resource of API.allResources()) {
            if (URItemplate(parsedURL.pathname).test(resource.completeRelativeUri())) {
                let methodNode = resource.childMethod(methodName.toLowerCase())[0];
                for (const resp of methodNode.responses()) {
                    if (resp.code().value() == statusCode) {
                        return resp.body()[0];
                    }
                }
            }
        }
    }
    catch (err) {
        throw new Error(`Cannot find declaration for: ${methodName}: ${statusCode}: ${uri}`);
    }
}
function validateBodyFor(uri, body, methodName = 'get', statusCode = '200') {
    let status = getResponseBodyDeclaration(uri, methodName, statusCode).validateInstanceWithDetailedStatuses(body);
    if (status.length > 0) {
        let messages = status.map(st => st.getMessage()).join(' ');
        throw new Error(`${JSON.stringify(status)}`);
    }
    return;
}
exports.validateBodyFor = validateBodyFor;
//# sourceMappingURL=RAMLvaildator.js.map