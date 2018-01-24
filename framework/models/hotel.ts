export interface IHotels extends Array<IHotel>{
    //[Symbol.iterator](): IHotel
    //[index: number]: IHotel
}


export interface IHotel {
    id: number,
    name: string,
    stars: number
}