    // *********************** require() -> use to require node modules ***********************
    // *********************** util ->  do the same thing like console.log but the defference is the util log has a timestamp ***********************
    // *********************** v8 ->  get information about memory ***********************

var path = require('path');
var util = require('util');
var v8 = require('v8');

console.log('------------------------------------');
console.log(path.basename(__filename));
console.log('------------------------------------');

// returns current directory and the string path
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads'); // ->join() -> can use to join a path with a string

console.log('------------------------------------');
util.log(dirUploads);
console.log('------------------------------------');

console.log('------------------------------------');
util.log(v8.getHeapSpaceStatistics());// gets the current information about memory
console.log('------------------------------------');
