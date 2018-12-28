// READLINE is module that allows us to ask questions of are teminal user it is a wrapper between stdin and stdout
var readline = require('readline');
var realPerson = {
    name: '',
    sayings: []
}

var rl = readline.createInterface(process.stdin, process.stdout); // create an instance of readline which is createInterface

rl.question("What is the name of a real person?", function(answer){
    realPerson.name = answer;
    rl.setPrompt(`What would ${realPerson.name} say?`);
    rl.prompt();//This method writes the readline.Interface instances configured prompt to a new line in output in order to provide a user with a new location at which to provide input.
    rl.on('line', function(sayings){
        if (sayings.toLowerCase().trim() === 'exit') {
            rl.close(); // close the terminal
        }else{
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave)`);
            rl.prompt();
        }
    });
});

rl.on('close', function(){
    // %s -> replace the nxt text to string
    // %j -> replace the nxt varible to json object
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
});