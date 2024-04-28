// creating a Guestlist Array
var guestlist = ["zain", "huzaifa", "zunair"];

//Making variable for te guest who ant come 
var dontcome = guestlist[0];

//print the name of guest who cant come 
console.log(dontcome, "nai asakta");

//Add or remove values from Guestlist Array
guestlist.splice(0, 1, "ahsan");

//Message print for Bigger table
console.log("Good news ! we have found a bigger table for dinner.");

// Adding a new value at starting index of array
guestlist.unshift("yousuf");

//Adding a new value at ending index of array
guestlist.push("furqan");

// Get a middle index of our guest list array
var middleinddex = Math.floor(guestlist.length / 2);

// Adding a new guest to middle index of array
guestlist.splice(middleinddex, 0, "osama");

//print message updated list 
console.log("updated list of our guest");

// sending a invitation message to our guests one by one with their names
guestlist.forEach(function (oneguest) { return console.log("SALAM ".$(oneguest), ", would u like to dinner with me?")}. )
