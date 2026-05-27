// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score = Number(prompt("Enter the score here!"))

if(score >= 80 && score<= 100){
    console.log("A Grade")
}else if(score >=70 && score<89 ){
    console.log("B Grade")
}else if(score >= 60 && score <69){
    console.log("C Grade")
} else if(score >= 50 && score < 59){
    console.log("D Grade")
}else if(score >= 0 && score <49){
    console.log("F Grade")
}else{
    console.log("Invalid Score")
}