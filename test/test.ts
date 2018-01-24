import { SearchController } from "../framework/controllers/searchController";
import { SearchParamsBuilder } from "../framework/builders/searchParamsBuilder";
import { CommentsController } from "../framework/controllers/commentsController";
import { PurchaseController } from "../framework/controllers/buyController";
import { assert } from "chai";

/**
 * What happens in this test:
 * 
 * 1) Requesting some default model from builder, we don't care what exaclty, just any valid
 * 2) Creating special corresponding Controller object, that handles all manipulations with request
 * 3) Controller must accept SearchParams type to perform search, we don't care at all where you got it
 * 4) Request is prepared and sent by APIrequest module
 * 5) Response is validated against ./api.raml documentation file
 */
describe('Search', function () {
    it('should be successful', async function () {
        let searchParams = new SearchParamsBuilder().build()
        await new SearchController().search(searchParams)
    })
})

describe('Comments', function () {
    it('can be retrived for all hotels from search results', async function () {
        let searchParams = new SearchParamsBuilder().build()
        let hotels = await new SearchController().search(searchParams)

        for (let hotel of hotels) {
            await new CommentsController().comments(hotel.id)
        }
    })
})

describe('Purchase', function () {
    it('first can be purchased', async function () {
        let searchParams = new SearchParamsBuilder()
            .forDestination('Kiev')
            .build()

        let hotels = await new SearchController().search(searchParams)

        let confirmation = await new PurchaseController().buy(hotels[0].id)

        assert.deepEqual(confirmation, {
            "id": 1,
            "status": 0,
            "message": "Successfully purchased!",
            "code": 5555
        })
    })
}) 