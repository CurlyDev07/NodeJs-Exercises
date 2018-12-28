var spawn = require('child_process').spawn;

var cp = spawn("node", ["05-2-alwaysTaking"]);

cp.stdout.on('data', function(data){
    console.log('------------------------------------');
    console.log(`STDOUT: ${data}`);
    console.log('------------------------------------');
})

cp.on('close', function(){
    console.log('------------------------------------');
    console.log('Child Process has ended');
    console.log('------------------------------------');
    process.exit();
});

setTimeout(function(){
    cp.stdin.write("stop")
}, 4000);