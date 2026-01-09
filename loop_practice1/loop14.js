


// use a for-of loop to iterate through the array ["chai","green tea","herbal tea","black tea"] and skip herbal tea store the other teas in array name preferredTeas

let chainame = ["chai","green tea","herbal tea","black tea"]

let preferredTeas = []

for(let indexnum of chainame){
    if(indexnum === "herbal tea" || indexnum === "Herbal tea"){
        continue
    } preferredTeas.push(indexnum)
}
console.log(preferredTeas)
