var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name){
    this.name = name;
}// constructor

util.inherits(Person, EventEmitter); 

module.exports = Person;