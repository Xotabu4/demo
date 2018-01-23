import * as RAML from 'raml-1-parser'
import { URL } from 'url'
import * as URItemplate from 'uri-templates'

let RAML_API: RAML.api10.Api = null;


function parseAPI(ramlFilePath: string = './api.raml'): RAML.api10.Api {
    if (!RAML_API) {
        RAML_API = RAML.loadApiSync('./api.raml', { rejectOnErrors: true }) as RAML.api10.Api
    }
    return RAML_API
}


function getResponseBodyDeclaration(uri: string, methodName: string = 'get', statusCode: string = '200'): RAML.api10.TypeDeclaration {
    try {
        let API = parseAPI()
        let parsedURL = new URL(uri) // .pathname
        for (let resource of API.allResources()) {
            console.log('Trying to match:', parsedURL.pathname, resource.completeRelativeUri())
            if (URItemplate(resource.completeRelativeUri()).test(parsedURL.pathname)) {
                let methodNode = resource.childMethod(methodName.toLowerCase())[0]
                for (const resp of methodNode.responses()) {
                    if (resp.code().value() == statusCode) {
                        return resp.body()[0]
                    }
                }
            }
        }
        throw new Error(`Cannot find declaration for: ${methodName}: ${statusCode}: ${uri}`)
    } catch (err) {
        throw new Error(`Cannot find declaration for: ${methodName}: ${statusCode}: ${uri}`)
    }
}

export function validateBodyFor(uri: string, bodyObj: object, methodName: string = 'get', statusCode: string = '200') {
    let status = getResponseBodyDeclaration(uri, methodName, statusCode).validateInstanceWithDetailedStatuses(bodyObj)

    if (status.length > 0) {
        let messages = status.map(st => st.getMessage()).join(' ')
        throw new Error(`${JSON.stringify(status)}`)
    }
    return
}
