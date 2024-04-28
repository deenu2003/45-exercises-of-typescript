// creating a Guestlist Array
let guestlist = ["Zain", "Huzaifa", "Zunair"];

//Making variable for those guest who cant come 
let dontcome= guestlist[0];

//print the name of guest who cant come 
console.log(dontcome, "nai asakta");

//Add or remove values from Guestlist Array
guestlist.splice(0, 1, "Ahsan");

//Message print for Bigger table
console.log("Good news ! we have found a bigger table for dinner.");

// Adding a new value at starting index of Array
guestlist.unshift("Yousuf");

//Adding a new value at ending index of Array
guestlist.push("Furqan");

// Get a middle index of our guest list Array
let Middleinddex: number= Math.floor(guestlist.length / 2);

// Adding a new guest to middle index of Array
guestlist.splice(Middleinddex, 0, "Osama");

//print message updated list 
console.log("updated list of our guest");

// sending a invitation message to our guests one by one with their names
guestlist.forEach (oneguest => console.log("SALAM ${oneguest},  would u like to dinner with me?"));

// Inform that only two guests can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me")

// using while-loop to remove from the array until two names remain
while(guestlist.length > 2){
    let removeGuest = guestlist.pop();
    console.log("sorry, ${removeGuest} I cant invite you to dinner");
}

//sending a invitation to the last two guest on the list 
console.log("Invitations to the last two Guests");
guestlist.forEach(lasttwo => console.log('Luckly ${lasttwo},you are still invited to dinner'));

//REMOVING LAST TWO GUESTS FROM THE LIST
guestlist.pop();
guestlist.pop();

console.log("Empty List",guestlist);