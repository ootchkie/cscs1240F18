//Use node to write "abcd"  to a file named stuff.dat
//
const fs = require('fs');

var data = 'abcd ';//process.argV[3];
var file = 'stuff.dat ';//process.argV[2];

fs.writeFile(file, data, (err) => {
	
	if( err ) {
		console.log('error')	;
			
	} else {
	  	console.log( 'success!');	
	  	fs.readFile(file, (err,FDAT) => {
			console.log(FDAT.toString());
		});
	}

	} );



