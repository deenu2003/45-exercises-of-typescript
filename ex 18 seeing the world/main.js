var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of countries and print its orginal order
var countriestovisit = ["Canada", "Dubai", "Australia", "Germany"];
console.log("Orginal order:", countriestovisit);
// print the Array in Alphabetical order without modify the actual list
console.log("Alphabetical Order;", __spreadArray([], countriestovisit, true).sort());
// show that the Array is still in orginal order
console.log("still in original order", countriestovisit);
// print the Array in Reverse order without modify the Actual Array list
console.log("Reversr order:", __spreadArray([], countriestovisit, true).reverse());
// show that the Array is still in orginal order
console.log("still in original order", countriestovisit);
// we have changed the orginal Array order now
console.log("Orginal Array Reversed:", countriestovisit.reverse());
// primt the Array to show that its back to its original order
console.log("Back to Original Order:", countriestovisit.reverse());
// Print the Array to show that its order has been changed in Alphabetical order
console.log("Sorted in Alphabetical Order:", countriestovisit.sort());
// we have changed again  the orginal Array order now in reverse order again
console.log("Orginal Array Reversed again:", countriestovisit.reverse());
