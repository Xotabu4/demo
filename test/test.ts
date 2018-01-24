import { SearchController } from "../framework/controllers/searchController";
import { SearchParamsBuilder } from "../framework/builders/searchParamsBuilder";
import { CommentsController } from "../framework/controllers/commentsController";
import { PurchaseController } from "../framework/controllers/buyController";
import { assert } from "chai";

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