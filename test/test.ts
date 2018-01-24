import { SearchController } from "../framework/controllers/searchController";
import { SearchParamsBuilder } from "../framework/builders/searchParamsBuilder";
import { CommentsController } from "../framework/controllers/commentsController";


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