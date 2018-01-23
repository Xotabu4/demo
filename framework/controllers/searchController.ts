import { BaseController } from "./baseController";
import { APIRequest } from "../APIrequest";
import { ISearchCriterias } from "../models/search";
import { IHotels } from "../models/hotel";

export class SearchController extends BaseController {
    async search(searchCriterias: ISearchCriterias): Promise<IHotels> {
        return (await new APIRequest(`/search`)
            .queryParameters(searchCriterias)
            .send()).body as IHotels
    }
}