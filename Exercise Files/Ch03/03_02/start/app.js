
console.log(process.argv); // process.argv returns an array of path of the node.exe and the current working directory

function grab(flag){
    var index = process.argv.indexOf(flag);

    return (index === -1) ? null : process.argv[index+1];
}

var user = grab('--user');
var greeting = grab('--greeting');

if (!user || !greeting) {
    console.log('You Blew it');
}else{
    console.log(`Welcome ${user}, ${greeting}`);
}

// console.log(grab(1));
