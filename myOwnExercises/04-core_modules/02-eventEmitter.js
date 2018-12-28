// ******************** eventEmitter ->create listner and custom event ********************
// ******************** Contstructor is a  anonymous function.... function without a name and setted in a variable********************
// see description https://nodejs.org/api/events.html

// the events is a constructor so you can create a new instace of it
// var events = require('events'); 

// var EventEmitter = new events.EventEmitter();

// // when the custom event is raise i pass the message and status to this call back function asyncronously and log the message and status
// emitter.on('customEvent', function(message, status){
//     console.log('------------------------------------');
//     console.log(`${status}: ${message}`);
//     console.log('------------------------------------');
// });

// // to call the event 
// emitter.emit('customEvent', "Hello World", 200); 

// ************************************_OBJECT ORIENTED STYLE_************************************ //

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name){
    this.name = name;
}// constructor

// this is how to enherit the constructor to constructor
// the first argument is a constructor who will enherit the properties and methods of other constructor
// the second argument is a mother constructor 
// for shor the args 1=child 2=parent
util.inherits(Person, EventEmitter); 

var reggie = new Person('Reggie');

reggie.on('speak', function(said){
    console.log('------------------------------------');
    console.log(`${this.name} says : ${said}`);
    console.log('------------------------------------');
});

reggie.emit('speak', 'Im so Pogi');