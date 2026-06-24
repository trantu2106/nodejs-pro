import express from "express"
import { clearScreenDown } from "readline";
require('dotenv').config()

const app = express();

const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send("hello world nodemon ")
})
app.get('/trananhtu',(req,res)=>{
    res.send("hello tran anh tu n")
})


app.listen(8080,()=>{
    console.log(`my app is running on port : ${port}`)
    console.log(`ENV PORT: `, process.env.PORT)
})