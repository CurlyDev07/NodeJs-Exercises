var question  = [
    'What is your name',
    'What is your fav hobby',
    'What is your preferred programming language'
]

var answer = [];

function ask(i) {
    process.stdout.write(`\n\n ${question[i]}`); // process.stdout.write('string')  ->print a result like consol.log
    process.stdout.write("  >  ");
}

// process.stdin expecting data to enter. and the ****** .on('data', funt()) ****** is if the user enter a data like strin, number, characters then run this funtion 
process.stdin.on('data', function(data){ 
    // print the data and convert it to string and trim the unnecessary characters 
    process.stdout.write('\n'+ data.toString().trim() + '\n');

    answer.push(data.toString().trim()); // every user's answer add it to array

    if (answer.length < question.length) {
        ask(answer.length)
    }else{
        process.exit(); // Stop
    }
});

process.on('exit', function(){
    let index = 0;
    process.stdout.write("\n\n\n\n");
    process.stdout.write(" *********** Result *********** \n");
    question.forEach(q => {
        process.stdout.write( q + ' : ' + answer[index]  +'\n');
        index++;
    });
    process.stdout.write("\n\n\n\n");

});// run this funtion when encounters an exit function

ask(0);