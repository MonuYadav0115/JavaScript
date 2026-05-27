// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = Number(prompt("Enter the age!"))

if (age >= 18){
    console.log("You are old enough to drive!")

}else {
    let yearsleft = 18 - age 
    console.log(`You need to wait ${yearsleft} more years to turn 18`)
}



