function grab(flag){
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}

var user = grab('--user');
var greetings = grab('--greetings');

if (!user || !greetings) {
    console.log('------------------------------------');
    console.log('You blew it');
    console.log('------------------------------------');
}else{
    console.log('------------------------------------');
    console.log(`Welcome ${user}, ${greetings}`);
    console.log('------------------------------------');
}