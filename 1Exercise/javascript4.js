// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?


let num = Number(prompt("Enter the number!"))

if (num % 2 == 0){
    console.log(`${num} is even number`)
}else{
    console.log(`${num} is not even number`)
} 
