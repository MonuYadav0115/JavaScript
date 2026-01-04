
// Iteration 

// 1 

// let saledate = [
//     {producs: "mobile" , price: 120},
//     {producs: "laptop" , price: 110},
//     {producs: "mouse" , price: 80},
//     {producs: "keybord" , price: 200}
// ]

// let totalsaleprice = saledate.reduce((accumulator , sale)  => accumulator + sale.price ,0)
// console.log(totalsaleprice)


// 2 

// let buildingmaterial = [
//     {produc:"cement",price:490},
//     {produc:"Red balu",price:8000},
//     {produc:"white balu",price:5000},
//     {produc:"Sariya",price:12000},
//     {produc:"Gatar",price:2000}
// ]


// let totalbill = buildingmaterial.reduce((accumulator , sale) => accumulator + sale.price , 0);
// console.log(totalbill)




// 3  less than 50 item

// let inventory = [
//     {name: "widgetA" , stock:30},
//     {name: "widgetB" , stock:120},
//     {name: "widgetC" , stock:45},
//     {name: "widgetD" , stock:70},
// ];

// let lowstockitem = inventory.filter((item) => item.stock < 50)

// console.log(lowstockitem)


// 4 find most active user 

let useractivity = [ 
    {user:"zentrox", activitycount:45},
    {user:"tom", activitycount:75},
    {user:"Monu", activitycount:33}
]

let mostactive = useractivity.reduce((maxuser, user) =>
    user.activitycount > maxuser.activitycount ? user : maxuser
);

console.log(mostactive);
