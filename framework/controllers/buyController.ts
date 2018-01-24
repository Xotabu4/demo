import { BaseController } from "./baseController";
import { APIRequest } from "../APIrequest";
import { IPuchaseParameters, IConfirmation } from "../models/purchase";

export class PurchaseController extends BaseController {
    async buy(hotelId: number) {
        return (await new APIRequest(`/buy/${hotelId}`)
            .send()).body as IConfirmation
    }
}