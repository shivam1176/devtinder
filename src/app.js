const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("hello form the server");
})
app.use("/hello",(req,res)=>{
    res.send("hello hello");
})
app.listen(3000,()=>{
    console.log(`listening on port 3000`);
});

