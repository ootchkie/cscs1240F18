const os = require( 'os' );

console.time('timer');
console.log("qwerty");
console.timeEnd('timer');

console.log('this process is running on ');
//$; //this returns an error
var path = process.platform;//this was an some strange idea, ??
//my attempt to show platform name as string <--sucess!!
console.log(process.platform); 
console.log($);

