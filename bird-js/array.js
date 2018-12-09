exports.sunBirds = (wildBird , wildArray) => {
		var state_Ns = [];
		var nFound = 0;
		var ID = undefined;
        
		for(var student of wildArray.student){
			if( student.id == wildBird) {
				state_Ns[nFound] = student.id ;
				nFound++;
			}	
    
        }
    
		ID = state_Ns[nFound - 1];
		
		return wildArray;
}
