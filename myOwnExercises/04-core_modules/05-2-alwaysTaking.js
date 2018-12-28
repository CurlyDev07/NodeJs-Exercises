var sayings = [
    "You may delay, but time will not.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "It takes many good deeds to build a good reputation, and only one bad one to lose it.",
    "Early to bed and early to rise makes a man healthy, wealthy and wise.",
    "By failing to prepare, you are preparing to fail.",
    "An investment in knowledge pays the best interest.",
    "Well done is better than well said."
];

var interval = setInterval(function() {
	var i = Math.floor(Math.random() * sayings.length); // create a random index not exceeding the lengh of an array
	process.stdout.write(`${sayings[i]} \n`); // print in the sayings with random index
}, 1000);

process.stdin.on('data', function(data) {
	console.log(`STDIN Data Recieved -> ${data.toString().trim()}`); // print out the inputed data
	clearInterval(interval);// clear the interval
	process.exit();// exit the process
});

