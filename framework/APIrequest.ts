import * as request from 'request'

import * as requestPromise from 'request-promise-native'
import { URL } from 'url'

import { validateBodyFor } from './RAMLvaildator'

export class APIRequest {
  protected client = requestPromise
  private options: request.OptionsWithUri

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

    this.client = requestPromise.defaults({
      json: true, // sets body to JSON representation of value and adds Content-type: application/json header. Additionally, parses the response body as JSON - https://github.com/request/request
      time: true, // For logging purposes
      resolveWithFullResponse: true, // To get full response, not just body
      followAllRedirects: true
    })
  }

  public method(method: 'POST' | 'GET'): APIRequest {
    this.options.method = method
    return this
  }

  public queryParameters(queryParameters: Object): APIRequest {
    // TODO: use Object.assign and do check for existence before
    this.options.qs = queryParameters
    return this
  }

  public async send(): Promise<request.RequestResponse> {
    // Sending request with collected options, will be merged with default params.
    let response = (this.client(this.options)) as Promise<request.RequestResponse>
    this.logResponse(response)
    return this.validateAgainstRAML(response)
  }

  private async logResponse(responsePromise: Promise<request.RequestResponse>) {
    try {
      let response = await responsePromise
      console.log(`${this.options.method}:${response.statusCode}: ${this.options.uri} took: ${response.timingPhases.total.toFixed()} ms`)
      console.log(`RESPONSE BODY: ${JSON.stringify(response.body, null, 2)}`)
    } catch (error) {
      if (error.response) {
        console.warn(`${this.options.method}:${error.response.statusCode}: ${this.options.uri} took: ${error.response.timingPhases.total} ms`)
        console.warn(`RESPONSE BODY: ${JSON.stringify(error.response.body, null, 2)}`)
      } else {
        console.warn(error.message || error);
      }
    }
  }

  private async validateAgainstRAML(response: Promise<request.RequestResponse>): Promise<request.RequestResponse> {
    var uri = null
    //try {
      
      let resp = await response
      uri = resp.request['href'].toString()
      
      validateBodyFor(uri, resp.body)
      console.log(`Validation against RAML documentation for ${uri} passed`)
    // } catch (error) {
    //   console.error(`Validation against RAML documentation for ${uri} FAILED`)
    //   error.response = response
    //   throw error
    // }
    return response
  }
}