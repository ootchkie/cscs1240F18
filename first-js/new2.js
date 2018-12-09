const os = require( 'os' );

console.time('timer');
console.log("qwerty");
console.timeEnd('timer');

os.type([ ]);//  <-- this was my attempt to show what operating system was running node.
//Empty parenthesis did not output anything. I am attemping to do this another way in my
//'new3' version. I do not know how to illicit a response with this 'os' API module.
