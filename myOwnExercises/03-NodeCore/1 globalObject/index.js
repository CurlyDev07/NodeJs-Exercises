// ALL code is available globaly
var path = require('path');
var hello = "Hello World from node.js";

// slice(17) will slice the first 17 text on the hello variable
var sliceNode = hello.slice(17);

// console.log(`Rock on the World from ${sliceNode}`);
console.log(`Rock on the World from ${path.basename(__filename)}`); //returns only the filename of the current file

// console.log(__dirname); // returns the fullpath of the current directory
// console.log(__filename); // returns a fullpath with the file name






