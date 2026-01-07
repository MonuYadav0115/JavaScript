

// write a do-while loop that prompts a user to enter thair favorite tea type until they enter "stop",store each tea type in an array named teaCollection 


// run in browser 


let teacollection  = []
let tea;

do{
    tea = promt("enter the fav chai until stop")
    if(tea !== "stop"){
        teacollection.push(tea);
    }
}while(tea !== "stop")

console.log(teacollection)
