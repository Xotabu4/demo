import { BaseController } from "./baseController";
import { APIRequest } from "../APIrequest";
import { IComments } from "../models/comment";

export class SearchController extends BaseController {
    async comments(hotelId: number) {
        return (await new APIRequest(`/comments/${hotelId}`)
            .send()).body as IComments
    }
}