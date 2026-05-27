let num = Number(prompt("Enter the number!"));

switch (true) {

    case (num > 0):
        console.log("Positive Number");
        break;

    case (num === 0):
        console.log("Zero");
        break;

    case (num < 0):
        console.log("Negative Number");
        break;

    default:
        console.log("Invalid");
}