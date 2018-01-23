export interface IPuchaseParameters {
    creditCard: string
    cvv: string
    expration: string
    hotelId: number
}

export interface IConfirmation {
    id: number,
    status: number,
    message: string,
    code: number
}