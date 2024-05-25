
import React from 'react'
import axios from 'axios'
import *  as actionType from '../constants/productsConstants';

const url="http://localhost:8000";
 export const getProducts = () => async(dispatch) => {
      try{
        let response = await axios.get(`${url}/products`);
        console.log(response);
        dispatch({type:actionType.GET_PRODUCTS_SUCCESS,payload:response.data});
      }catch(error){
        console.log({type:actionType.GET_PRODUCTS_FAIL,payload:error.message})
      }
}

export default getProducts;
 
export const getProductsDetails=(id)=> async(dispatch)=>{
     
  try{
      dispatch({type:actionType.GET_PRODUCTS_DETAIL_REQUEST});
      const {data} = await axios.get(`${url}/product/${id}`);
      dispatch({type:actionType.GET_PRODUCTS_DETAIL_SUCCESS,payload:data});

  } catch(error){
    dispatch({type:actionType.GET_PRODUCTS_DETAIL_FAIL,payload:error.message});
  }

}