var orange = "orange";
var uppercaseOrange = "Orange";
var ten = 10;
var twenty = 20;
var fruits = ["apple", " grapes", "orange"];
// Test for equality and inequality with strings
console.log("Is orange is equal to orange?");
console.log(orange == "orange");
console.log("\nIs orange is not equal to orange?");
console.log(orange != "orange");
// Tests using lowercase functions
console.log("\nIs Orange is equal to orange after converting to lowercase?");
console.log(uppercaseOrange.toLowerCase() == "orange");
console.log("\nIs Orange is not equal to orange after converting to lowercase?");
console.log(uppercaseOrange.toLowerCase() != "orange");
// Numerical test
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
//Greater than
console.log("\nIs ten is greater to zero?");
console.log(ten > 0);
//Less than
console.log("\nIs twenty is less than to ten?");
console.log(twenty < 10);
//Greater than or equal to
console.log("\nIs twenty is greater than or equal to 5?");
console.log(ten >= 5);
// Less than or equal to
console.log("\nIs twenty is less than or equal to ten?");
console.log(twenty <= ten);
// Tests using And & Or operators
// using And
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equals to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equals to 20");
console.log(20 > 50 || 20 != 20);
// Test  whether an include in Array
console.log("\n Is orange include in my fruits array");
console.log(fruits.includes("orange"));
// not include
console.log("\n Is banana not include in my fruits array");
console.log(fruits.includes("banana"));
