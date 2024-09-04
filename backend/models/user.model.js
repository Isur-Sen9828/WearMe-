const mongoose = require("mongoose");
const userShema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String, 
        required:true,
    },
    cartData:{
        type:Object, 
    },
    date:{
        type:Date,
        default:Date.now, 
    },
})

const User = mongoose.model('User',userShema);
module.exports = User;