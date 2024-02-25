import { NextResponse } from "next/server";
import connectMongoDb from "../../../../libs/mongodb";
import Product from '../../../../models/product';


// export async function POST(request) {
//     const { name, img, price, events, discount } = await request.json();
//     await connectMongoDb();
//     await Product.create({name, img, price, events, discount})
//     // await Product.create([{name: 'Nike Air', img: 'nike_airmax_blue.png', price: 180, discount:{percentages: 20, state: true}, events:{new: true, hot: false}}]);
//     return NextResponse.json({ message: "Hello from Next.js" }, { status: 200 });
// };


export async function GET(request) {
    await connectMongoDb();
    const products = await Product.find();

    return NextResponse.json({products}, {status: 200});
};