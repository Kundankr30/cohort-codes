const express= require('express');
const app= express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "fuckoffap";
app.use(express.json());
const users=[];
function logger(req,res,next){
    console.log(req.method+" request from");
    next();
}
app.get("/",function(req,res){
    res.sendFile("/home/kundan-kumar/js/authadv/index.html");
})
app.post("/signup",logger,function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    users.push(
        {username:username,
        password:password
})
res.json({
   message: "You are signed in "

})

})
app.post("/signin",logger,function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    let founduser = null;
    let i;
    for( i =0 ;i<users.length;i++){
        if(users[i].username==username){
            founduser= users[i];

        }
    }
    if(!founduser){
        res.json({
            message:"User does not exists"
        })
    }
    else{
        const token = jwt.sign({
            username : founduser.username
        },JWT_SECRET)
     res.json({
        message:"SignUp sucessfull",
        token : token

    })
    console.log(founduser);
    console.log(token);

    }

})
function auth (req,res,next){
    const token = req.headers.token;
    const decodeddata= jwt.verify(token,JWT_SECRET);
    if(decodeddata.username){
        req.username =decodeddata.username
        next();
    }
    else{
        res.json({
            message: "Login again",
        })
    }
}
app.get("/me",logger,auth ,function (req, res) {

    const currentuser =  req.username;
    //const token = req.headers.token;
    //const decoded = jwt.verify(token,JWT_SECRET);
    let founduser;

        for(let i=0;i<users.length;i++){
            if(users[i].username===currentuser){
                 founduser = users[i];
            }
        }
       
        res.json({
            username : founduser.username,
            password : founduser.password
        })

    
});

app.listen(3000,()=>{
    console.log("Server is running at port 3000");

});
//assigment create auth middile ware