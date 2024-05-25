import axios from 'axios';

const URL='http://localhost:8000';

export const signUpAuthentication=async(data)=>{
      try{
         return await axios.post(`${URL}/signup`,data);
      }catch(error){
             console.log('Error while connecting signup api',error)
      }
    }

    export const loginAuthentication=async(data)=>{
      try{
         return await axios.post(`${URL}/login`,data);
      }catch(error){
             console.log('Error while connecting login api',error)
             return error.response;
      }     
    }
