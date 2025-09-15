const express = require('express');
const app= express();
const JWT_SECRET = "thisisfortheworld";
const jwt = require('jsonwebtoken');

app.use(express.json());
const users=[];
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {

        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}
app.post("/singup",function(req,res){
    const username =req.body.username;
    const password = req.body.password;
    users.push({
        username:username,
        password:password
    })
    res.json({
        message: "You are Signed in"
    })

})
app.post("/signin",function(req,res){
    const username = req.body.username;
    const password =req.body.password;
    let foundUser =null;
    let i=0;
    for(i=0;i<users.length;i++){
        if(users[i].username==username &&users[i].password==password){
            foundUser=users[i];
            break;
        }
    }
    if(foundUser){
        const token = jwt.sign({
            username:username,
        },JWT_SECRET);
       foundUser.token=token;
        res.json({
            message:token,
            status:"Login succesfully"
            
        })
        
    }
    else{
        res.status(404).send({
            message:"Username or password is wrong"
        })
    }
    console.log(users);

})
app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})
