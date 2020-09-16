const express = require('express');

const app = express();

const user = require('./models/user');

app.use(express.json());

// const customMiddleware = (req,res,next) =>{
//   console.log("welcome to middleware");
//   next();
// }
// app.use(customMiddleware);

app.get("/",(req, res) => {
    res.send("first request")
    // console.log("first request");
});
app.get("/users",(req, res) => {
    let users = ["admin","superadmin"]
    res.send(users);
    res.send("getting users");
    // console.log("first request");
});
app.post("/create-users",async (req, res) => {
    try{
        const myuser = new user(req.body); 
        await myuser.save();  
        res.send(myuser)
    // console.log(req.body.name);

    // res.send(`Created your users ${req.body.name}`)
    // console.log("first request");
    }catch(err){
        res .send("errors in response")
    }
});

module.exports = app;
