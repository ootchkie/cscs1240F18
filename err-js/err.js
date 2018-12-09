//This is a NODEjs file where I am testing moduleULES, try/catch block, and a FUNCION
//var mods = require('./modules.js');
const A = require('./school.js');
var bird = require('./bird.js');
//const CONV = require('./conversion.js');
const E = require('./err.js');
const P = require('./pmClass.js');

//console.log(CONV.funBirds('Bluebird', B.state));

//console.log(CONV.gpa(103, A.school));

try{
 E.idErr(101, A.school);
 }
catch(err) {
            console.error(err);
        }
/*
var states = P.statesOfBird( 'Western meadowlark', bird.state );
console.log( states );
///*/
//console.log(B.school);
