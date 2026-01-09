

// used a for-in loop to loop through an object containig city populations
// skip any city with a population below 3 million and store the rest in a new object named "largeCities"

let citypopulation = {
    varansi:2000000,
    hyderabad:3000000,
    bengluru:4000000,
    pune:5000000,
    chennai:6000000
}

let largeCities = {}

for(const indexnum in citypopulation){
    if(citypopulation[indexnum] < 4000000){
        continue
    } largeCities[indexnum] = citypopulation[indexnum]
}
console.log(largeCities)
