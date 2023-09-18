const mongoose  = require('mongoose');

const User = new mongoose.Schema(
    {
        firstname:{
            type:String,
            require:true,
            trim:true
        },
        lastname:{
            type:String,
            require:true,
            trim:true
        },
        phone:{
            type:String,
            default:null,
            trim:true
        },
        email:{
            type:String,
            require:true,
            trim:true
        },
        message:{
            type:String,
            require:true,
            trim:true
        }
    }

)



module.exports = mongoose.model("User",User);
