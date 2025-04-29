import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  
    street: { type: String, required: true },  
    district: { type: String, required: true },  
    city: { type: String, required: true },  
})

const addressModel = mongoose.models.address || mongoose.model("address", addressSchema)

export default addressModel;