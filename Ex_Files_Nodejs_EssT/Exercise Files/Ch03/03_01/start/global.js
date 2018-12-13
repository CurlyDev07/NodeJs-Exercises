var path  = require('path');

var hello = 'Hello World from node js';

var justNode = hello.slice(17); // remove the first 17 character from the given string 

// the  `` characters allow you to add a variable inside this string
// --------just add a $ sign in front of it then wrapp the variable in a curly bracket
// console.log(`Rock on the World from ${justNode}`);

// console.log('__dirname : ' + __dirname); // get the full path where is the current directory is located
// console.log('__filename : ' + __filename); // get the full path including the filename that u working on



console.log(path.basename(__filename));