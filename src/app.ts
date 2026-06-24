import express from "express"
import webRoutes from "./routes/web";

require('dotenv').config()

const app = express();

const port = process.env.PORT || 8080

// config view engine 
app.set('view engine ', 'ejs')
app.set('views', __dirname + '/views')

// config routes
webRoutes(app);

//config static file : images css js 
app.use(express.static('public'));

app.listen(8080,()=>{
    console.log(`my app is running on port : ${port}`)
})