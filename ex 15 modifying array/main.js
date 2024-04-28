var guestlist = ["zain", "zunair ", "huzaifa"];
var dontcome = guestlist[0];
console.log(dontcome, "nai asakta");
guestlist.splice(0, 1, "ahsan");
guestlist.forEach(function (guest) { return console.log("SALAM ".concat(guest, ", Would you like to dinner with me?")); });
