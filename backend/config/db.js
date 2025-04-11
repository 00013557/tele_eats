import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://@cluster0.ifdytmv.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}

