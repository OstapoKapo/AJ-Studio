import mongoose from "mongoose";

const connectMongoDb = async () => {
    try{
       await  mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected successfuly');
    }catch(err){
        console.log(`We have some error --- ${err}`)        
    }
}

export default connectMongoDb;