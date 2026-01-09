


// write a for loop that through the array ["London","NewYork","Paris","Berlin"] and skip the paris and store the other cities in new array named visitedcities:

let city = ["London","NewYork","Paris","Berlin"]

let visitedcities = []

for(let index = 0; index <city.length; index++){
    if(city[index] === "NewYork" || city[index] ==="newyork"){
        continue
    } let newcity = city[index]
    visitedcities.push(newcity)
}
console.log(visitedcities)
