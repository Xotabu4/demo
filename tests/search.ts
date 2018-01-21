import {APIRequest} from '../framework/APIrequest'

process.env.API_URL = 'https://my-json-server.typicode.com/Xotabu4/demo'

describe('Search', function () {
    it('should be successful', async function () {
        await new APIRequest('/search').send()
    })
}) 