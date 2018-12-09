//my attempt to function from command-line	
function myfunction(a, b) {
	var result =  a + b;
	return result;
}


//console.log( myfunction( 3 ,6) );
var sum = myfunction( 3, 6);
var sum = myfunction( sum, 6);

//console.log(sum);


function cliAdd( a ) {
	var result = a + parseInt(process.argv[ 2 ]);
	return result;
}


sum = cliAdd( 4 );
console.log( sum );
