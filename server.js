const express=require('express')
require('dotenv').config()
const router=require('./routes/item')
const Connection = require('./config/db')
const postrouter = require('./routes/post')
const app=express()




app.use(express.json())
app.use("/",router)
app.use("/",postrouter)


const PORT=process.env.PORT || 6000;
app.listen(PORT,()=>{
    Connection()
    console.log(`server is running in port ${PORT}`)
})