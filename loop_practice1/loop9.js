

// write a for loop that multiplies each element in the array [2,4,6] by 2 and store the result in a new array name multipliednumber

let number = [2,3,4,5,6]

let multipliednumber = []

for(let index = 0; index < number.length ; index++){
    let takenumber = number[index] * 3
    multipliednumber.push(takenumber)

}
console.log(multipliednumber)

