
// write a for loop that list all the cities in the array ["paris","newYork","Tokyo","London"] and store each city in new array name citylist 

// let cities = ["Paris" , "NewYork" , "Tokyo" , "London"]

// let citylist = []

// for(let index = 0; index < cities.length; index++){
//     let takecitie = cities[index]
//     citylist.push(takecitie)
// }
// console.log(citylist)


let cities =  ["Paris" , "NewYork" , "Tokyo" , "London"]

let citylist = []

for (let index = 0; index < cities.length; index++){
    let addcity = cities[index];
    citylist.unshift(addcity);
}
console.log(citylist)
