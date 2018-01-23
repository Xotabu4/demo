import {APIRequest} from '../framework/APIrequest'

process.env.API_URL = 'https://my-json-server.typicode.com/Xotabu4/demo'

describe('Search', function () {
    it('should be successful', async function () {
        
        //await new APIRequest('/search').send()
        //await new APIRequest('/search/1').send()
        //await new APIRequest('/buy/1').send()
        await new APIRequest('/comments').send()

    })
}) 