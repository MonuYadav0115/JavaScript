// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer



let season = prompt("Enter the season here!").toLowerCase()

if(season === "september" || season === "october" || season === "november"){
    console.log("This season is Autumn")
}else if(season === "december" || season === "january" || season === "february"){
    console.log("This season is Winter")
}else if (season === "march" || season === "april" || season === "may"){
    console.log("This season is Spring")
} else if(season === "june" || season === "july" || season === "august"){
    console.log("This season is Summer")
}else{
    console.log("Invalid")
}