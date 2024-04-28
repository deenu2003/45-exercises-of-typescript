// Define a function to print each magician name from an array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Define an array containng magician name
var magician_name = ["Harry poter", "Dayaan", "Huzaifa"];
// Call the function to print each magician name
show_magician(magician_name);
