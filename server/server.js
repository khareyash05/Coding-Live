const express = require('express');
const app = express();
const cors = require("cors");
const fs = require('fs');
const {PythonShell} =require('python-shell');

app.use(express.json())
app.use(cors());
app.post("/",(req,res)=>{
    fs.writeFileSync('python.py',req.body.code);
    console.log(req.body);
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time          
        args: ['shubhamk314'] //An argument which can be accessed in the script using sys.argv[1]
    };   
    console.log("ffjgf");
    PythonShell.run('python.py', options, function (err, result){
          if (err) console.log(err);
          console.log('result: ', result.toString());
          res.send(result.toString())
    });
    console.log("fgjuh")
    res.json({message : "sucess"});
})
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})