export interface IHotels {
    [index: number]: IHotel
}


export interface IHotel {
    id: number,
    name: string,
    stars: number
}