import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Uddesh:Uddesh5004@cluster0.dcjwqmt.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}

