// Define the functions to show magician names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
   return magicians.map(name =>`The Great ${name}`)
}

// Define an array of magicians names
let magician_names = ["Harry porter", "Dayaan", "Huzaifa"];

let great_magicians = make_great(magician_names);

console.log(great_magicians);

// Making a copy of orginal array through .slice() function

let copy_magician_names = magician_names.slice()

// Modify the copied array to include "The Great" with thier names

let copy_great_magicians = make_great(copy_magician_names);

// Show both arrays original and copied

// Original
show_magicians(magician_names);

// Copied
show_magicians(copy_great_magicians);