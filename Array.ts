
let fruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Array:", fruits);

// PUSH ; Add a string to the end of array:

fruits.push("Mango");
console.log(" Add in Array last Word 'Mango':",fruits);

// UNSHIFT ; Add a string to the beginning of the array:

fruits.unshift("pineapple");
console.log("Add in Array First Word 'pineapple':", fruits);

// Remove a string from a specific index in the array and replace it with another string:

let index: number = 2;

let replacement: string = "Orange";

let removed: string = fruits.splice(index, 1, replacement)[0];

console.log(`Array after removing '${removed}' at index ${index} and replacing it with '${replacement}':`, fruits);
