import * as request from 'request'

import * as requestPromise from 'request-promise-native'
import { URL } from 'url'

// not implemented yet
// import { RAMLValidator } from './RAMLvalidator'

export class APIRequest {
  protected client = requestPromise
  private options: request.OptionsWithUri

  get requestOptions(): request.OptionsWithUri {
    return Object.assign({}, this.options)
  }

  constructor(relativeURL: string) {
    // Hardcoded, but can be overrided
    const api_url = process.env.API_URL || 'https://my-json-server.typicode.com/Xotabu4/demo'
    // Prepending with slash
    relativeURL = relativeURL.startsWith('/') ? relativeURL : '/' + relativeURL
    let concatenated = process.env.API_URL + relativeURL

    // initializing options object
    this.options = {
      uri: concatenated,
      method: 'GET' // Doing GET request by default
    }

    // setting some default parameters, notice this WILL not be returned with .requestOptions()
    this.client = requestPromise.defaults({
      json: true, // sets body to JSON representation of value and adds Content-type: application/json header. Additionally, parses the response body as JSON - https://github.com/request/request
      time: true, // For logging purposes
      resolveWithFullResponse: true, // To get full response, not just body
      followAllRedirects: true
    })
  }

  public async send(): Promise<request.RequestResponse> {
    console.log(`SENDING REQUEST: ${JSON.stringify(this.requestOptions, null, 2)}`)
    // Sending request with collected options, will be merged with default params.
    let response = (this.client(this.options)) as Promise<request.RequestResponse>
    this.logResponse(response)
    return response
    //return this.validateAgainstRAML(response)
  }

  /**
   * Doing some logging. This does not handles exceptions or modifies response object
   * @param response Promise
   */
  private async logResponse(responsePromise: Promise<request.RequestResponse>) {
    try {
      let response = await responsePromise
      console.log(`${this.requestOptions.method}:${response.statusCode}: ${this.requestOptions.uri} took: ${response.timingPhases.total.toFixed()} ms`)
      console.log(`RESPONSE BODY: ${JSON.stringify(response, null, 2)}`)
    } catch (error) {
      if (error.response) {
        console.log(`${this.requestOptions.method}:${error.response.statusCode}: ${this.requestOptions.uri} took: ${error.response.timingPhases.total} ms`)
        console.log(`RESPONSE: ${JSON.stringify(error.response, null, 2)}`)
      } else {
        console.log(error.message || error);
      }
    }
  }

  private validateAgainstRAML(response: Promise<request.RequestResponse>): Promise<request.RequestResponse> {
    return
    // new ResponseRAMLValidator(resp, { ignoreMissingRAML: true }).validate()
  }
}