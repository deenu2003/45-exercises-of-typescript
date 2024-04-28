// Creatn an Array
let username = ["Areeb","Zain","Zunair","Ahsan","Admin"];

// Using ForEach Loop on Array
username.forEach(oneuser => {
    if(oneuser === "Admin"){
        console.log(`Hello ${oneuser},would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneuser},thanku for logging in again`)
    }
})