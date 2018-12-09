exports.passFail = function( points ) {
	if( points >= 65 ) return "pass";
	else return "fail";
}

exports.pointsToLetter-ClassExample = ( points ) => {
	var letter = 'F';
	if( points <= 60 ) letter = 'F';
	else if(points <= 70) letter = 'D';
	else if(points <= 70) letter = 'C';
	else if(points <= 70) letter = 'B';
	else if(points <= 70) letter = 'A';
	else throw 'too many points';
	return letter;
}


exports.pointsToLetter = ( points ) => {
	var letters = ['F','D','C','B','A'];
	var letter;
	var lower = 0 ; var upper = 60;
	var count;
	for(count = 0; count < 5; count++) { 
		if( points > lower && points < upper ) letter = letters[count];
		if( count == 0 ) lower = lower + 60; else lower = lower + 10;
		upper = upper + 10;
	}

	return letter;
}
