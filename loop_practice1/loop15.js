

// use a for-in loop to loop through an object containig city populations.
// stop the loop when the population of "Berlin" is found and store all previous cities populations in a new object named newcitypopulations.


let citiespopulation = {
    NewYork:300000,
    London:400000,
    Berlin:200000,
    Paris:500000
}

let newcitypopulations = {}

for(let indexcity in citiespopulation){
    if(indexcity === "Berlin"){
        break
    } newcitypopulations[indexcity] = citiespopulation[indexcity]
    
}
console.log(newcitypopulations)
