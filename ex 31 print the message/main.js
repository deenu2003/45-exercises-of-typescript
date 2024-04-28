// Creating an Array
var usernames = ["Zain", "Zunair", "Ahsan", "Admin"];
usernames = [];
if (usernames.length === 0) {
    console.log(" your array is empty you need to find some user");
}
else {
    // Using ForEach Loop on Array
    usernames.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("Hello ".concat(oneuser, ",would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneuser, ",thanku for logging in again"));
        }
    });
}
