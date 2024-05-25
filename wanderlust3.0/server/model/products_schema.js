import mongoose from "mongoose";
const productSchema=new mongoose.Schema({

    id:{
        type:String,

    },
    title:String,
    image:{
        filename:String,
        url:String
    },
    price:Object,
    location:String,
    country:String
})
const Products=mongoose.model("products",productSchema);
export default Products;