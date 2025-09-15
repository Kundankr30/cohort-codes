class Rectangle {
   constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
   }

   area() {
       const area = this.width * this.height;
         return area;
   }

   paint() {
            // Corrected template literal syntax
            console.log(`Painting with color ${this.color}`);
   }
}

const rect = new Rectangle(2, 4, 'blue'); // Added a color
const area = rect.area();

// Just call the method, no need to log its (undefined) return value
rect.paint();
console.log(`The area is: ${area}`);


//  Date class is used which is defined by other
const date = new Date();
console.log(date);
// Corrected: call the method with ()
console.log(`Day of the week (0=Sun, 1=Mon...): ${date.getDay()}`);


//map class
const map = new Map();
map.set('name', 'Kundan');
map.set('sic', '24bcsg85');
map.set('semester', '3rd');
console.log(map.get('name'));


// Correctly creating a Promise
function waitfor3s(resolve){
    setTimeout(resolve,10000)
}
function setpr() {
    return new Promise(waitfor3s);
}

function callback() {
    console.log("3 seconds have passed");
}

console.log("Starting promise timer...");
setpr().then(callback);
