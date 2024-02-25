export interface Product {
    name: string,
    img: string,
    price: number,
    discount: {
        percentages: number,
        state: boolean
    },
    events: {
        new: boolean,
        hot: boolean
    },
    _id: string
}
export interface Main {
    currency: any,
    setCurrency: any,
}