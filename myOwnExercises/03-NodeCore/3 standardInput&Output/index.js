var questions = [
    'What is your name?',
    'How old are you?',
    'What is your favorite color?'
];

var answers = [];
          
function ask(i){
    process.stdout.write(i);
};

ask(questions[0]);