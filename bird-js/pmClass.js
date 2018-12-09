exports.state = function( birdName, stateArray ) {
	var result = [];
	var count = 0;

	while( stateArray[count] != undefined ) {
		//console.log( stateArray[count] );
		//result = stateArray[count].bird;
	    if( stateArray[count].bird == birdName ){
		result[result.length] = stateArray[count].state;
	    }
	    count = count + 1;
	    element = stateArray[count];
	}//end loop	
return result;
}


