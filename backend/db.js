const mongoose=require('mongoose')
require('dotenv').config()

const MONGO_URL=process.env.MONGO_URL;

const connectToMongo=()=>{
mongoose.connect(MONGO_URL,()=>{
    console.log("Connected to the MongoDB");
})
}

module.exports=connectToMongo