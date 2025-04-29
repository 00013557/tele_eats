import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://alshrsdv:23261219@cluster0.ifdytmv.mongodb.net/food-delivery').then(()=>console.log("DB is connected"));
}

