var personName = "Dayaan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (dinu) { return dinu.toUpperCase(); }));
