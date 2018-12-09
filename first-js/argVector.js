//small program block for homework 9-24
//
const fsModule = require('fs');

var pathFiller = process.argv[2];

fsModule.readFile(pathFiller,(err, data) => { console.log(pathFiller)
					      console.log(err)
					      console.log(data.toString())	});

