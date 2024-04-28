let guestlist = [ "zain", "zunair ", "huzaifa"];

let dontcome = guestlist[0];

console.log (dontcome, "nai asakta");

guestlist.splice(0,1,"ahsan");

guestlist.forEach(guest => console.log (`SALAM ${guest}, Would you like to dinner with me?`));