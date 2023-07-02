const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const colors=require('colors');

const connectDb = require('./config/connectDb');


//config dot env file
require('dotenv').config();
//databse call
connectDb();
//rest object
const app=express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
//user routes
app.use("/api/v1/users",require("./routes/userRoute"));

//transacrion routes
app.use("/api/v1/transactions",require("./routes/transactionRoutes"));

//port
const PORT=8080 ||process.env.PORT

//listen server
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
});
