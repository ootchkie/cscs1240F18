const array = require('./school.js');
const grades = require('./sunByrds.js');

var run = grades.sunByrds('102', array.school);
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
