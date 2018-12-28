var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var percentWaited = 0;

function writeWaitingPercent(p){
    process.stdout.clearLine(); // clear the last line inside of the terminal
    process.stdout.cursorTo(0) // move the cursor back to the beginning of the line
    process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function(){
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
    writeWaitingPercent(percentWaited);
    // console.log(`waiting ${currentTime/1000} seconds...`); // devide this to 1000 because if not the result will add a two or tree zero
}, waitInterval);// set this to a variable to  able to apply clearInterval(inteval) and pass this varible

setTimeout(function(){
    console.log("\ndone");
    writeWaitingPercent(100);
    clearInterval(interval); // clear interval and stops the process
}, waitTime);// the wait time in this function is delay of timeOut

process.stdout.write('\n\n');
writeWaitingPercent(percentWaited); // call the func