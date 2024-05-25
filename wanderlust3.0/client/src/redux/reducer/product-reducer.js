import * as actionType from '../constants/productsConstants.js'


export const getProductsReducer=(state={products:[]},action)=>{
      switch(action.type){
         case actionType.GET_PRODUCTS_SUCCESS:
          return {products:action.payload}
         
         case actionType.GET_PRODUCTS_FAIL:
               return {error:action.payload}

         default:
          return state;
      }
}

export const getProductDetailsReducer = (state ={product:{}},action)=>{
      switch(action.type){
            case actionType.GET_PRODUCTS_DETAIL_REQUEST:
                  return {loading:true}
            case actionType.GET_PRODUCTS_DETAIL_SUCCESS:
                  return {loading:false,product:action.payload};
            case actionType.GET_PRODUCTS_FAIL:
                  return {loading:false,error:action.payload};
            case actionType.GET_PRODUCTS_DETAIL_RESET:
                  return { product:{}};
            default:
                  return state;

      }
}