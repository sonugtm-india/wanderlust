import { products } from "./constants/data.js";
import Products from "./model/products_schema.js";


const DefaultData=async()=>{
    try{
      await Products.deleteMany({});
      await Products.insertMany(products)
      console.log("data is imported successfully")
      console.log(products)
    }
    catch(error){
        console.log('Error while insert default data',error.message)
    }
}
export default DefaultData;