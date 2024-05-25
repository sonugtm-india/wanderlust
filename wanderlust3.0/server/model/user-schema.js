import mongoose from 'mongoose';

const  userSchema= new mongoose.Schema({
         
    firstname:{
        type:String,
        require:true,
        trim:true,
    },
    lastname:{
        type:String,
        trim:true,
        required:true
    }
    ,
    username:{
        type:String,
        unique:true,
        trim:true,
        index:true,
        lowercase:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        lowercase:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }

})
 const User=mongoose.model('user',userSchema);
 
 export default User;