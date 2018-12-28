var path  = require('path');
var util = require('util'); // util module is like a console log but the difference is its add a timstamp in front of result
var v8 = require('v8'); 

util.log(path.basename(__filename));

var dirUpload = path.join(__dirname, 'www', 'files', 'uploads'); // gets the foldername of the file and add the following directory

util.log(dirUpload);

util.log(v8.getHeapSpaceStatistics()); //get s the current information of current memory statistics