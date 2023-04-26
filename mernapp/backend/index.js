require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT_NO;
const mongoDB=require("./db")
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",process.env.LOCAL_PORT);
    res.header(
       "Access-Control-Allow-Headers",
       "Origin,X-Requested-With, Content-Type, Accept"
    );
    next();
})
mongoDB();
//console.log(process.env.SECRET_KEY)
app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));

app.listen(port,()=>{
console.log(`Examples app listening on port ${port}`)
})