//This FUNCTION is where I am trying to perform a GPA calculation
exports.gpa = (studentID , school) => {//sandwich must be a valid student ID NUMB
	var index = 0;
    var tomato = [];
//all courses for studentID with grades from school object given in function call
	var  dataSet = ( school.student[index].course );
//block to test for valid ID NUMB 
	try{(dataSet!='undefined') 
        for( var aCourse of dataSet)
        { 
		    var lettuce = dataSet[index].points;
		//var index = 0;
            tomato[index] = lettuce; 		
        //increment tomato index
            index++;
        }
        //tomato now contains an array of gpa values for studentID
    }        
	catch ( err ) 
    {
     console.error(' Please Enter Valid Student ID NUMB', err);
    }

    
    return (tomato)
}
