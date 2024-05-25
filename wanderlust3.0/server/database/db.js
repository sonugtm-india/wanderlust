
import mongoose from "mongoose"

export const Connection =async(MONGO_URL)=>{
   
    try{
          await mongoose.connect(MONGO_URL,{useUnifiedTopology: true,useNewUrlParser:true});
          console.log("Database is connected successfully")
    } catch(error){
        console.log("Error While Connecting Database")
    }
}
