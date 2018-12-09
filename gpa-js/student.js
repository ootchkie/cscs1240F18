exports.funBirds = (wildBird , wildArray) => {
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
		
		return ID;
}
/*/
exports.funBirds = (wildBird , wildArray) => {
		var state_Ns = [];
		var nFound = 0;
		    //two variables needed for compounding variables
		for(var it of wildArray){
			if( wildArray == wildBird) {
				state_Ns[nFound] = it.wildArray ;
				nFound++;
			}	
		}
		return state_Ns;
}
/*/
