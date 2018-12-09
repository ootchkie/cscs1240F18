 //var divisor = 3;
 //var dividend = 0;


function division( divisor, dividend ) {
	var difference = (dividend);
	var count = 0;


	while(difference >= divisor)
	{	
		difference = dividend - divisor;
		dividend = dividend - divisor; //x = x-3,necessary in order for dividend to change	
		count ++;
	}
return count;
return	differnce;	
}

var result = division( parseInt(process.argv[ 2 ] ), parseInt(process.argv[ 3 ] ));  //[2]divisor, [3]dividend
console.log( result );
