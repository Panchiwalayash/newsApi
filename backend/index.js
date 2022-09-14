const express=require('express');
const app=express();
const port=5000;
const helmet=require('helmet');
const morgan=require('morgan');
const connectToMongo = require('./db');
const cors=require('cors')

app.use(cors())
connectToMongo();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/auth',require('./routes/auth'))

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})