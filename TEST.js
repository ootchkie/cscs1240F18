//This is a NODEjs file where I am testing FUNCIONS
const A = require('./gpa-js/school.js');
const B = require('./bird-js/bird.js');
const CONV = require('./conversion.js');



console.log(CONV.celsius(32));

console.log(CONV.fahrenheit(0));

console.log(CONV.kg2lb(1));

console.log(CONV.meters(3000));

console.log(CONV.ounces(30));

console.log(CONV.tax(40000));

console.log(CONV.multiTax(500001));

console.log(CONV.dog('large'));

console.log(CONV.letterToPoints('B-'));

console.log(CONV.funBirds('Mockingbird', B.bird));

console.log(CONV.gpa(102, A.school));
