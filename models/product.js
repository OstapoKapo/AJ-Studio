import mongoose, {Schema} from "mongoose";

const prodcutShcema = new Schema({
    name: String,
    img: String,
    price: Number,
    discount: {
        percentages: Number,
        state: Boolean
    },
    events: {
        new: Boolean,
        hot: Boolean
    }
});

const Product = mongoose.models.Product || mongoose.model('Product', prodcutShcema);

export default Product;
