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
    _id: string,
    currency: any,
    setCurrency: any,
}
export interface Currency {
    currency: any,
    setCurrency: any,
}