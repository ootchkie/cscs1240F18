//This is a small program block to read a File
//
var pathFiller = process.argv[0];

const fsModule = require('fs');

fsModule.readFile((process.argv[2]), (one, two) => { 	(console.log('one, two'),
						 console.log('buckle my shoe'))});
