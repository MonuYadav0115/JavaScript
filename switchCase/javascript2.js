let dayUserInput = prompt("What is day today?")
let day = dayUserInput.toLocaleLowerCase()

switch(day){
    case "monday":
        console.log("Today is monday!")
        break
    case "tuesday":
        console.log("Today is Tuesday!")
        break
    case "wednesday":
        console.log("Today is wedneaday!")
        break
    case "thursday":
        console.log("Today is thursday!")
        break
    case "friday":
        console.log("Today is Friday!")
        break
    case "suturday":
        console.log("Today is suturday!")
        break
    case "sunday":
        console.log("today is sunday!")
        break
    default:
        console.log("Invalide day!")

}