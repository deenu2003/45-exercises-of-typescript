// Creatn an Array
var username = ["Areeb", "Zain", "Zunair", "Ahsan", "Admin"];
// Using ForEach Loop on Array
username.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ",thanku for logging in again"));
    }
});
