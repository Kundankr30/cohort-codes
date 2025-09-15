const { time } = require("console");
const fs =require("fs");
function print(err,data){
    if(err){
        console.log("file not found error");
    }
    else{
        console.log(data);
        
    }

}

fs.readFile("a.txt","utf-8",print);
function bew(){
    console.log("click the button")

}

setTimeout(bew,3000);