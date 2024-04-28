// Making a Array of countries and print its orginal order
let countriestovisit:string[] = ["Canada", "Dubai" , "Australia", "Germany"];
console.log("Orginal order:",countriestovisit);

// print the Array in Alphabetical order without modify the actual list
console.log("Alphabetical Order;",[...countriestovisit].sort());

// show that the Array is still in orginal order
console.log("still in original order",countriestovisit);

// print the Array in Reverse order without modify the Actual Array list
console.log("Reversr order:",[...countriestovisit].reverse());

// show that the Array is still in orginal order
console.log("still in original order",countriestovisit);

// we have changed the orginal Array order now
console.log("Orginal Array Reversed:", countriestovisit.reverse());

// primt the Array to show that its back to its original order
console.log("Back to Original Order:", countriestovisit.reverse());

// Print the Array to show that its order has been changed in Alphabetical order
console.log("Sorted in Alphabetical Order:",countriestovisit.sort());

// we have changed again  the orginal Array order now in reverse order again
console.log("Orginal Array Reversed again:", countriestovisit.reverse());
