// Array and objects Time start 1:10 hours


let chaiType = ["Masala tea","Ginger tea","lemon tea","green tea"]

console.log(chaiType[2])
console.log(`Total chai type ${chaiType}`)
chaiType.push("Herbal tea")
const data = chaiType.pop()
console.log(data)

console.log(chaiType)

let index = chaiType.indexOf("lemon tea")
console.log(index);

if (index !== -1){
    chaiType.splice(index,1);
}
console.log(chaiType);

chaiType.forEach((chai,index) =>{
    console.log(`${index + 1} ${chai}`)

})

let morechaiType = ["Oolange chai","whitw tea"]

let allchaiType = chaiType.concat(morechaiType)
console.log(allchaiType)

let newchaiTypes = [...chaiType,"chamolina tea"]

console.log(newchaiTypes)




// **************** objects literals time 1:20 minutes*******************//



