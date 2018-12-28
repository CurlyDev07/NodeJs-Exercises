var exec = require('child_process').exec; // this code can run a terminal codes lik md, cd, ren

// anay return data from exec function will return to second argument
// on a callback function any error returns in a first argument
// on the second args returns the result
exec("git version", function(err, stdout){ 
    if (err) {
        throw err;
    }

    console.log('-----------------git version-------------------');
    console.log(stdout);
    console.log('------------------------------------');
});

// exec('start https://dwheeler.com/essays/open-files-urls.html')