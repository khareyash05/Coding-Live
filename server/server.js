const express = require('express');
const app = express();
const cors = require("cors");
const fs = require('fs');

app.use(express.json())
app.use(cors());
app.post("/",(req,res)=>{
    fs.writeFileSync('test.js',req.body.code);
    console.log(req.body);
    res.json({message : "sucess"});
})
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})