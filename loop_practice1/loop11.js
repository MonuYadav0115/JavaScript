
// filter the chai in this array list 

let teas = ["Lemon tea" , "Masala tea" , "Green tea" , "chai" , "black tea", "white tea"]

let taketea = []

for(let index = 0; index < teas.length; index++){
    if(teas[index]=== "chai"){
        continue
    } taketea.push(teas[index])
}
console.log(taketea)