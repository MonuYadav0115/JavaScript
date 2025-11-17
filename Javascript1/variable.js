// Primitive DataType 

let number = 42;          // Number 
let text = "Hello";      // String
let  isTrue = true;     //Boolean
let nothing = null;    // Object / null
let undefinedVar = undefined;    // Undefined
let symbolVar = Symbol();       //Symbol


// console.log(typeof nothing);
// console.log(typeof undefinedVar);


// Non Primitive datatype object *************

let person = {
    name: "monu",
    age: 22,
    isStudent: true
}


// ******* number conversion ************//


let num = "44"

// let convertedNum = Number (num)      // This one used our life coding compare to next two 
// let convertedNum = +num 
// let convertedNum = parseInt(num)

// console.log(convertedNum)
// console.log(typeof convertedNum)

// ************* string conversion*************//

let str = 123

let convertedString = String(str)
// console.log(convertedString)
// console.log(typeof str)
// console.log(typeof convertedString)



//  ******************operation******************************//

let a = 10
let b = 3 

let sum = a + b 
let difference = a - b 
let product = a * b 
let quotient = a / b 
let reminder = a % b 
let power = a ** b 


// ***********************Comparion**********************//

let x = 5 
let y = 10 

// console.log(x == y);   // Equal to  
// console.log(x != y);   // Not Equal to
// console.log(x > y);   // greater then
// console.log(x < y);   //less than
// console.log(x >=y);   //greater then equal
// console.log(x <= y);  //less then or equal
   

// console.log(Math.max(5,10));
// console.log(Math.min(5,10));

// console.log(Math.random());
// console.log(Math.random() * 10);

// *******************String*******************//

let name = "Monu"
let lastname = "Yadav"

let fullname = name + " " + lastname
// console.log(fullname)

let message = "Hello world"
// console.log(message.toLowerCase())
// console.log(message.toUpperCase())
// console.log(message.indexOf("world"))
// console.log(message.slice(0,5))

// ****************************Template literals**********************//

let myName = "Monu"

let greeting = `Hello ${myName} from hyderabad`


