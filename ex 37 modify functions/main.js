// Making a function
function make_shirt(size, printmessage) {
    if (size === void 0) { size = "Large"; }
    if (printmessage === void 0) { printmessage = " I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printmessage, " prints on shirt"));
}
// Calling a function
make_shirt();
// Calling a function now with Medium size and default message
make_shirt("Medium");
// Calling a function now with Small size and Different Print message
make_shirt("small", "I Love JavaScript");
