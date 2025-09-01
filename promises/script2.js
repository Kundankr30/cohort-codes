const express = require('express');
const { parse } = require('path');
const app =express();
app.use(express.json());

app.get("/add",function(res,req){
    let a = parseInt(req.query.a);
    let b =parseInt(req.query.b);
    res.json({
        ans: a+b
    })

})
app.get("/sub",function(res,req){
    let a= parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.statusCode(400).json({
        ans: a-b
    })

})
app.get("/product",function(res,req){
    let a= parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.statusCode(400).json({
        ans: a*b
    })

})
app.get("/divide",function(res,req){
    let a= parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.statusCode(400).json({
        ans: a/b
    })

})