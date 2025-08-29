import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        requred:true
    },
    email:{
        type:String,
        requred:true,
        unique:true
    },
    password:{
        type:String,
        requred:true
    },
   
})

 const User=mongoose.model("User",userSchema);
 export default User;