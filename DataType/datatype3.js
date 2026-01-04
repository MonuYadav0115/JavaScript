
// number convert 

let num = "11"       // if "11a" --> NaN output 

// let convertnumber = Number(num)
// console.log(convertnumber)
// console.log(typeof convertnumber)
// console.log(typeof num)

// 2 


// let str = 123
// let conversionString = String(str)
// console.log(conversionString)
// console.log(typeof conversionString)



//***************Operation*****************/


// In Operation used to () paranthesed  ---important  

let a = 12 
let b = 10 
let sum  = a + b 
let difference = a - b
let product  = a * b            // 120
let quatient = a / b          // 1.2
let reminder = a % b         // 2 
let power = a ** b          //61917364224
// console.log(product)    


// *************comparision ******************

let x = 20 
let y = 30

// console.log(x == y)
// console.log(x === y)
// console.log(x > y)
// console.log(x >= y)
// console.log(x < y)
// console.log(x <= y)
// console.log(x != y)



// library 


// console.log(Math.max(5,10))
// console.log(Math.min(5,10))


// console.log(Math.random() * 10)


// *********string***********

let fisrtname = "Zetrox"
let lastname = "Tom"

let fullname = fisrtname + lastname   // ZetroxTom
console.log(fullname)

let message = "Hello world "
console.log(message.toUpperCase())
console.log(message.toLowerCase())
console.log(message.indexOf("world"))
console.log(message.slice(0,5))

//template literals 


let myname = "zentrox"
let greeting = `Hello ${myname} from hyderabad`
console.log(greeting)
