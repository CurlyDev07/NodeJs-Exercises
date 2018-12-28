var fs = require('fs');
var path = require('path');

fs.readdir('./lib2', function(err, files){
    
   files.forEach(function(filename){
        var file = path.join(__dirname, 'lib2', filename); // get the full path of the file
        var stats = fs.statSync(file); // tells wether the file or directory

        if (stats.isFile) {
            fs.readFile(file, "UTF-8", function(err, data){
                console.log('------------------------------------');
                console.log(data);
                console.log('------------------------------------');
            });
        }
   });// loop trough directoy foreach file
});


// *********************** The readFile -> read the content of a file  ***********************

// *********************** Asyncronous ***********************
// fs.readFile('./lib2/sayings.md', 'UTF-8',function(err, data){
//     console.log('------------------------------------');
//     console.log(data);
//     console.log('------------------------------------');
// });

// console.log('------------------------------------');
// console.log('tae');
// console.log('------------------------------------');

// *********************** Syncronous ***********************
// the 1st args is the file that u want to read
// the 2nd args is the encoding type

// var contents = fs.readFileSync("./lib/sayings.md", "UTF-8");

// console.log('------------------------------------');
// console.log(contents);
// console.log('------------------------------------');
