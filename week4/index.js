const express = require('express');
const app = express();
const cors= require('cors');
const path = require('path');


app.use(express.json()); 
app.use(cors());

let noofrequest = 0;
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
})

function middleware(req, res, next) {
    noofrequest++;
    console.log(new Date());
    console.log("request details");
    console.log(req.method)
    console.log(req.url)
    if (noofrequest < 3) {
        next();
    } else {
        res.json({ request: noofrequest });
    }
}


app.use(middleware);

app.get("/add/:firstarg/:secondarg", (req, res) => {
    let a = parseInt(req.params.firstarg);
    let b = parseInt(req.params.secondarg);
    res.json({ ans: a + b });
});


app.get("/sub", (req, res) => {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    res.json({ ans: a - b });
});

app.get("/product/:a/:b", (req, res) => {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    res.json({ ans: a * b });
});
app.get("/divide/:a/:b",(req,res)=>{


    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);

    if (b === 0) {
        return res.status(400).json({ error: "Division by zero not allowed." });
    }
    res.json({ ans: a / b });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
