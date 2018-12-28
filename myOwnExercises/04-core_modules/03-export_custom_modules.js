var Person = require('./custom_module_lib/Person')

var Madel = new Person('Madel');
var Reggie = new Person('Reggie');

Madel.on('speak', function(said){
    console.log('------------------------------------');
    console.log(`${this.name} says... ${said}`);
    console.log('------------------------------------');
});

Reggie.on('speak', function(said){
    console.log('------------------------------------');
    console.log(`${this.name} says... "${said}"`);
    console.log('------------------------------------');
});

Madel.emit('speak', 'Im so pretty');
Reggie.emit('speak', 'Im so handsome');