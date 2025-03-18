import mongoose from 'mongoose';
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test");
        console.log("Mongodb is connected!");
    }catch(err){
        console.log("Error to connect db", err);
    } 
}

export default connectDB;