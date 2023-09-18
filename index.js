require("dotenv").config();
const express = require("express");
const app  = express();
const cors = require("cors");
const router = require("./routes/createUser");
const PORT = process.env.PORT || 8000;
const database = require("./config/database");

app.use(express.json());

app.use(cors({
    'allowedHeaders': ['Content-Type'],
    'origin': '*',
    'preflightContinue': true
  }
))


app.use("/api",router);

app.listen(PORT,()=>
{
    console.log(`Connected to Server at ${PORT}`)
})
database.dbConnect();

app.get("/",(req,res)=>
{
    res.send("<h1>Homepage</h1>")
})
