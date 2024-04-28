// Define a function with a rest parameter that accept items argument making  our sandwich 
function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 3 times with 3 different number of arguments
makesandwich("Chicken", "Cheese", "Mayo", "Egg");
makesandwich("Bread", "Butter");
makesandwich("Bread", "Butter", "Chicken", "Mayo", "Tomato", "Egg", "Cheese");
