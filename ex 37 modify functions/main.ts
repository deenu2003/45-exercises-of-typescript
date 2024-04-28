// Making a function
function make_shirt (size: string = "Large", printmessage: string = " I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printmessage} prints on shirt`)
}

// Calling a function
make_shirt();
 

// Calling a function now with Medium size and default message
make_shirt("Medium")

// Calling a function now with Small size and Different Print message
make_shirt("small", "I Love JavaScript")
