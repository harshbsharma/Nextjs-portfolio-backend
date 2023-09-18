const mongoose = require("mongoose");
require('dotenv').config();

const URL = process.env.DATABASE_URL;

exports.dbConnect = ()=>
{
    mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=> {console.log("Connected To Database")})
    .catch((error)=>
    {
        console.log("Failed In Connecting to Database");
        process.exit(1)
    })
}
