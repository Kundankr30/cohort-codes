function random(resolve){
        setTimeout(resolve,10000);
}
let p =new Promise(random);

function callback(){
    console.log("promise succeded");
}
p.then(callback);

