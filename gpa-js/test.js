//const bird = require( '../class-js/pmClass.js' );
//const B = require('../bird-js/bird.js');
const sample = require('./student.js');
const array = require('./school.js');
//const array = require('../bird-js/array.js');
const grades = require('./sunByrds.js');
/*
var states = bird.state( 'Robin red breast', B.bird );
console.log( states );
/*
 * write a program that takes the bird name as a command line argument and then 
 * returns the results for that bird from a outputing back to the screen again. 
 *
var fun = sample.funBirds('103', school.school);
console.log( fun );
 *
var sun = array.sunBirds('103', school.school);
console.log( sun );
 */
var run = grades.sunByrds('101', array.school);
console.log( run );

try{
 run;
 }
catch(err) {
            console.error(err);
        }

/*
 * This is space for comments
 * 
 * 
 * 
 * 
 * 
 */
