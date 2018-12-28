// *************************** require(fs) require the file_system  ***************************

var fs = require('fs'); 



// ***************** Asyncronous  *****************
// Asyncronous -> is will execute after all other connection execute for short this will execute last
fs.readdir('./lib', function(err, data){
    console.log('------------------------------------');
    console.log(data);
    console.log('------------------------------------');
});


console.log('------------------------------------');
console.log('Read data');


// ***************** Syncronous  *****************
//  Syncronous -> is will execute first before other connection fire up

// read the lib directory Syncronously with a blocking request so all other nodejs connection will wait for this Syncronous read call
// list all the directory inside the given folder
// var files = fs.readdirSync('./lib');
// console.log('------------------------------------');
// console.log(files);
// console.log('------------------------------------');

