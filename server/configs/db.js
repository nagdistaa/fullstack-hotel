import mongoose from "mongoose";

const connectDB = async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/database`);
    console.log("DB connected sucessfully")
  } catch (error) {
    console.log(error.meessage)
    process.exit(1);
  }
}

export default connectDB ;