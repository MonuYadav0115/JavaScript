

// function 

// function preparedchai (type){
//     if(type === "Masala chai"){
//         console.log("adding spaces to the chai")
//     } else {
//         console.log("Prepared regular chai")
//     }
// }
// preparedchai("Masala chai")


// 2 

// function PlayCricket (work){
//     if(work === "completed"){
//         console.log("Play cricket")
//     } else{
//         console.log("complete your work")
//     }
// }

// PlayCricket("completed")
// PlayCricket("Pending")




// Proble solved ---> if amount above 1000 so give 10 percent discount 

// 1 

// function amountpay(bill){
//     if(bill>=1000){
//        let discountbill = bill * 0.9
//         console.log(`You pay ${discountbill}`)

//     }else{
//         console.log(`You pay : ${bill}`)

//     }
// }
// amountpay(990)
// amountpay(1200)


 
// 2  Method 

// function calculateTotal(Bill){
//     if(Bill > 1000){
//         return Bill * 0.9;
//     } 
//     return Bill;

// } 

// calculateTotal(1100)        // this is not work becoused used in function return method be carefull 
// let finalbill = calculateTotal(1700)
// console.log(finalbill)
// console.log(calculateTotal(1200))



//  3  taffic light red yellow green



// function Trafficlight(light){
//     if (light === "red"){
//         console.log("Please stop driving")

//     } else if (light === "yellow"){
//         console.log("please slow down your speed")

//     } else if (light === "green"){
//         console.log("please Go to the drive")
//     }
// }
// Trafficlight("green")
// Trafficlight("red")
// Trafficlight("yellow")


//  3  taffic light red yellow green used swich case 

function Trafficlight(light){
    switch(light){
        case "red":
            console.log("Stop driving the car");
            break;
        case "yellow":
            console.log("please slow the speed");
            break;
        case "green":
            console.log("go to the drive ");
            break;
        default:
            if(typeof light === "number"){
                console.log("number is not valid in traffic light:")
            }else{
            console.log("Sleep and enjoy😊")

            }
    }

}
Trafficlight("red")
Trafficlight(12)
Trafficlight("yellow")
Trafficlight("green")
