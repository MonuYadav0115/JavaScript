
// Switch is an alternative for if else if else else. The switch statement starts with a switch keyword followed by a parenthesis and code block. Inside the code block we will have different cases. Case block runs if the value in the switch statement parenthesis matches with the case value. The break statement is to terminate execution so the code execution does not go down after the condition is satisfied. The default block runs if all the cases don't satisfy the condition

let weather = "rainy"

switch (weather){

    case "cloudy":
        console.log("weather is cloudy!")
        break
    case "summer":
        console.log("weather are summer in right now !")
        break
    case "rainy":
        console.log("weather is rainy in right now!")
        break
    default:
        console.log("i can't find it !")

}