// Define the functions to show magician names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magician_names = ["Harry porter", "Dayaan", "Huzaifa"];
var great_magicians = make_great(magician_names);
console.log(great_magicians);
// Making a copy of orginal array through .slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_magician_names);
// Show both arrays original and copied
// Original
show_magicians(magician_names);
// Copied
show_magicians(copy_great_magicians);
