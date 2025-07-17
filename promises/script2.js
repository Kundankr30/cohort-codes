function random(resolve){// reseolve is also a function
        resolve();
}
let p  =new Promise(random);
function callback(){
    console.log("promise succeded");
}
p.then(callback);