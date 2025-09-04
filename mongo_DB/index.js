const express = require("express");
const app = express();
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {z} = require("zod");
//yes something have changed

mongoose.connect("mongodb+srv://kundanixr:Kundan%40123@cluster0.6bcwq1b.mongodb.net/");
app.use(express.json());

app.post("/signup", async function(req, res) {
    const valid = z.object({
    email:z.string().max(20).min(3).email(),
    name:z.string().max(100),
    password:z.string().max(20).min(3)
}); 
const reqbody = valid.safeParse(req.body);
if(!reqbody.success){
    res.json({
        message:"Enter Valid EMail"
    });
    return;
}

//create zod schema of validating data
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
   // if(!email.isString()|| !email.contains("@")){
     //   res.json({
       //     message:"Enter a Valid Email, Try Again"
       // });
    //

try{
    await UserModel.create({
        email: email,
        password: password,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    })
}
catch(e){
    res.json({
        message:"User Already exists ,Try again"
    })
}
});



app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password,
    });

    if (response) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000 , ()=>{
    console.log("Server is running at port 3000")
});
