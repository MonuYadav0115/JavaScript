

// use a for -of loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found store the number before 4 in an array name smallNumber

let num = [1,2,3,4,5]

let smallnum = []

for(let indexnum of num){
    if(indexnum === 4){
        break
    } let takenum = indexnum
    smallnum.push(takenum)

}
console.log(smallnum)
