exports.sunByrds = (studNum , school) => {
//var student_Ns = [];//student numbers
    
    //data from school object
var studSet  = ( school.student );
var coreSet  = ( school.course );
///////////////////////////////////////////////////////////////////////////////
//define student ID number as key value
    var ID = undefined;
    var sNum = undefined;
    var index;//reusable index for 'for' loops

    for(index = 0; index < studSet.length; index++ ){ //3        
    //block to define student number and key(ID)
        if(studNum == studSet[index].id){
            ID = index;//set ID key if found
            sNum = studNum;
        }
    }
        
/////////////////////////////////////////////////////////////////////////////////////////////        
    //test for a valid student number
    if(ID == undefined){    
        //error for invalid ID   
        throw( "invalid student ID" );
    }
    //console.log(ID);console.log(sNum);    
        
///////////////////////////////////////////////////////////////////////////////////////////
    var student_CNs = [];//student courses' names
    var myGrades = [];//student grades
    
    for( var sCourse of studSet[ID].course)
    { 
        var course = sCourse.id;
        var score = sCourse.points;
    //student course names now set into array student_CNs
        student_CNs[student_CNs.length] = course;
    //set myGrades to an array of grades for student
        myGrades[myGrades.length] = score;
    }

    //console.log(student_CNs);console.log(myGrades);
////////////////////////////////////////////////////////HAPPY//HACKING///|run GNU,  run FREE
   var scoreChart = [];
   var creditArray = [];
   var totalCredits = 0;
   
   for(index = 0; index < coreSet.length; index++ ){ //4
//loops throught all of the names of school.course.id
        for(var name of student_CNs) {
//              console.log(name);
//              console.log(coreSet[index].id);
             if(name==coreSet[index].id) {
                 //if there is a name match set these 
                 scoreChart[scoreChart.length] = coreSet[index].pointscale;
                 creditArray[creditArray.length] = coreSet[index].credit;
                  totalCredits = totalCredits + coreSet[index].credit;
            }
        }
   }
//console.log(creditArray);console.log(totalCredits);

///////////////////////////////////////////////////////////////////////////
    var myLetters = [ ];//I want to give myself a letter Grade for each item
    
    for(index = 0; index < scoreChart.length; index++){ //3             
		var max = 100;
		var grade = scoreChart[index];
		//console.log(stretch);
//    myLetters = (Object.keys(scoreChart[index]));
		for(var letter in grade){                 
        //console.log(myGrades[index]);
        //console.log(grade[item]);
            if( (myGrades[index] >= grade[letter]) && (myGrades[index] < max ) ){
                myLetters[index] = letter;
			}
		//console.log(max);	
        max = grade[letter];	
		}
	}
//	console.log(myLetters);    
		
////////////////////////////////////////////////////////////////////////////
    var gradeSet = school.gradeScale;//This is the letter grade points chart for the school
    var pointSet = [];
    var weightedQP = [];
    
    for(index = 0; index < myLetters.length; index++){
        for(var letter in gradeSet){            
            if(myLetters[index] == letter){
                pointSet[pointSet.length] = gradeSet[letter];
                weightedQP[weightedQP.length] = creditArray[index] * pointSet[index];
            }
        }
    }
    
//    console.log(pointSet); console.log(weightedQP);
//////////////////////////////////////////////////////////////////////////////////////        
    var totalWQP = 0;
    var GPA = 0;
    
    for(index = 0; index < weightedQP.length; index++){
//add all weighted quality points and credits
            totalWQP = totalWQP + weightedQP[index];
    }
//    console.log(totalWQP);
//    console.log(totalCredits);
//final GPA calculation: total weighted quality points / total number or credits    
    GPA = totalWQP / totalCredits;
    
return GPA;
}
