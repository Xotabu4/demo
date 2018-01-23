"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestPromise = require("request-promise-native");
const RAMLvaildator_1 = require("./RAMLvaildator");
class APIRequest {
    constructor(relativeURL) {
        this.client = requestPromise;
        // Hardcoded, but can be overrided
        const api_url = process.env.API_URL || 'https://my-json-server.typicode.com/Xotabu4/demo';
        // Prepending with slash
        relativeURL = relativeURL.startsWith('/') ? relativeURL : '/' + relativeURL;
        let concatenated = process.env.API_URL + relativeURL;
        // initializing options object
        this.options = {
            uri: concatenated,
            method: 'GET' // Doing GET request by default
        };
        this.client = requestPromise.defaults({
            json: true,
            time: true,
            resolveWithFullResponse: true,
            followAllRedirects: true
        });
    }
    method(method) {
        this.options.method = method;
        return this;
    }
    queryParameters(queryParameters) {
        // TODO: use Object.assign and do check for existence before
        this.options.qs = queryParameters;
        return this;
    }
    async send() {
        // Sending request with collected options, will be merged with default params.
        let response = (this.client(this.options));
        //this.logResponse(response)
        return this.validateAgainstRAML(response);
    }
    async logResponse(responsePromise) {
        try {
            let response = await responsePromise;
            console.log(`${this.options.method}:${response.statusCode}: ${this.options.uri} took: ${response.timingPhases.total.toFixed()} ms`);
            console.log(`RESPONSE BODY: ${JSON.stringify(response.body, null, 2)}`);
        }
        catch (error) {
            if (error.response) {
                console.warn(`${this.options.method}:${error.response.statusCode}: ${this.options.uri} took: ${error.response.timingPhases.total} ms`);
                console.warn(`RESPONSE BODY: ${JSON.stringify(error.response.body, null, 2)}`);
            }
            else {
                console.warn(error.message || error);
            }
        }
    }
    async validateAgainstRAML(response) {
        var uri = null;
        //try {
        console.log('1');
        let resp = await response;
        uri = resp.request['href'].toString();
        console.log('2');
        RAMLvaildator_1.validateBodyFor(uri, resp.body);
        console.log(`Validation against RAML documentation for ${uri} passed`);
        // } catch (error) {
        //   console.error(`Validation against RAML documentation for ${uri} FAILED`)
        //   error.response = response
        //   throw error
        // }
        return response;
    }
}
exports.APIRequest = APIRequest;
//# sourceMappingURL=APIrequest.js.map