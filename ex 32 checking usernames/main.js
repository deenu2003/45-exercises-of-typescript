// Array of current users
var Current_users = ["Zain", "Zunair", "Huzaifa", "Ahsan"];
// Array of new users
var new_users = ["Hamza", "Zunair", 'Zain', "Mahad", "Areeb"];
// Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_users) {
    //Making a condition for username already exist and save in our_condition variable
    var our_condition = Current_users.some(function (Current_one_users) { return Current_one_users.toLowerCase() === new_one_users.toLowerCase(); });
    // Print Different messages using If-Else statements
    if (our_condition) {
        console.log("sorry ".concat(new_one_users, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_users, " is available"));
    }
});
