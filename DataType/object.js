
// Object 

// let chaiRecipe  = {
//     name: "Masala chai",
//     ingrediants: {
//         teaLeaves:"Assam tea",
//         milk:"Full cream milk",
//         sugar:"brown sugar",
//         spices:["Daalchini","Ginger"]
//     },
//     instruction:"Boil water ,add tea leaves milk,sugar and spices"

// }

// console.log(chaiRecipe.name)
// console.log(chaiRecipe.ingrediants.spices[1])



// 2  updated instruction 


//  let chaiRecipe  = {
//     name: "Masala chai",
//     ingrediants: {
//         teaLeaves:"Assam tea",
//         milk:"Full cream milk",
//         sugar:"brown sugar",
//         spices:["Daalchini","Ginger"]
//     },
//     instruction:"Boil water ,add tea leaves milk,sugar and spices"

// }

// let updatedchaiRecipe = {
//     ...chaiRecipe,
//     instruction: "Please make a chai full of energy and make a beautifull chai "
// }
// console.log(updatedchaiRecipe)


// important ---->

// let {name ,ingredients} = chaiRecipe       // ist called object destruturing
// let [firstchai , secondchai] = chaiType    // its called array destruring 




// 3 user check login or not throgh the usename and password 
// && ---> means (and)


// function login(username,password){
//     if(username === "zentrox" && password === "0115" ){
//         console.log("User login successfull")
//     }else{
//         console.log("user credintiale not valid")
//     }
// }
// login("zentrox","1115")



// 4 check user loging valid or not username and password and iPaddress (password or ipaddress one is right so user able to login)


// ------>(||)---->means (or)


function login(username,password,ipaddress){
    if(username ==="zentrox" && (password === "0115" && ipaddress === 123)){
        console.log("User loggedIn")
    }else{
        console.log("user credentials")
    }
}

login("zentrox","0115",1223)
