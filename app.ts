import express from "express"


const app = express();

const port = 8080;

app.get('/',(req,res)=>{
    res.send("hello world ")
})
app.get('/trananhtu',(req,res)=>{
    res.send("hello tran anh tu n")
})


app.listen(8080,()=>{
    console.log(`my app is running on port : ${port}`)
})