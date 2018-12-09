//function to convert given number to Celsius
exports.celsius = ( fahrenheit ) => {	
	return (fahrenheit-32)*5/9;
}

//function to convert given number to Fahrenheit
exports.fahrenheit = ( celsius ) => {	
    return ( (celsius*9 )/5 )+32;	
}

//function to convert Kilograms to Pounds
exports.kg2lb = ( kgs ) => {
	return (  kgs)*2.2046;
}

//function to convert Feet to Meters
exports.meters = ( feet ) => {
	var meters = feet *0.3048;
    //round to nearest Thousandth
    meters = Math.round(1000*meters)/1000;
    return (meters);
}

//function to convert Grams to Ounces
exports.ounces = ( grams ) => {
	var answer = (grams*0.03527395);
    //round to nearest Thousandth
    answer = Math.round(1000*answer)/1000;
    return answer;
}

//function to return tax rates
exports.tax = ( income ) => {
    var percent;
    
    if( income >=100000) percent = .331;
    
    else percent = .250;
    
    taxes = (income*percent);  
return taxes
}

//function to return multiple tax rates for individuals
exports.multiTax = ( salary ) => {
	var rate = .1;
	var tax;
	
	if((salary > 9525) && (salary <= 38700) ){rate = .12	}
	
	//individual tax rates
	if((salary > 38700) && (salary <=82500) ){rate = .22	}
	if((salary > 82500) && (salary <=157500)){rate = .24	}
	if((salary > 157500) && (salary <=200000) ){rate = .32}
        if((salary > 200000) && (salary <=500000) ){rate = .35}
	if(salary > 500000){rate = .37}

	tax = rate*salary;

return (("rate is "+rate)+" tax is "+tax);	
}

//FUNCTION to return dog types
exports.dog = ( value ) => {
	
//condition for deciding parameter value type
if(typeof(value)=='number'){
var breed;

	//conditions for returning sizes
	if(value>=4 && value<=6){
		return "X-small";
	}
	if(value>=11 && value<16){
		return "small";
	}
	if(value>=16 && value<25){
		return "medium";
	}
	if(value>=25 && value<40){
		return "large";
	}
	if(value>=40 && value<=50){
		return "X-large";
	}
	if(value>=60 && value<=90){
		return "2X-large";
	}
}else{
	//conditions for returning breeds
	if(value=="X-small"){// 4-6 lbs
		breed=["Bolognese"," Chihuahua", "Yorkshire Terrier"];
	}
	if(value=="small"){//   11-16 lbs
		breed=["Gotland Hound","Lowchen"," Dashund"];
	}	
	if(value=="medium"){//  16-25 lbs
		breed=["Basenji"," Boston Terrier","Shiba Inu"];
	}	
	if(value=="large"){//   25-40 lbs
		breed=["English Cocker Spaniel"," Nova Scotia Duck-Tolling Retriever"," Dutch Schapendoes"];
	}	
	if(value=="X-large"){// 40-50 lbs
		breed=["Ibizan Hound"," Pharaoh Hound"," Bulldog"];
	}	
	if(value=="2X-large"){//60-90 lbs
		breed=["Curly Coated Retriever"," Goldern Retriever"," Labrador Retriever"];
	}
 	return breed;	
     }
}

//FUNCTION to return letter grades
exports.letterToPoints = ( given ) => {
	var gradesObject = {'F':0.0,'D':1.0,'C':2.0,'C+':2.3,'B-':2.7,'B':3.0,'B+':3.3,'A-':3.7,'A':4.0};
	
    for(var letter in gradesObject){
        
        if(letter == given){
            var points = gradesObject[letter];
        }
    }
    
	return points;
}

//FUNCTION to return states of birds.js
exports.funBirds = (wildBird , wildArray) => {
		var state_Ns = [];
		var nFound = 0;
		    //two variables needed for compounding variables
		for(var it of wildArray){
			if( it.bird == wildBird) {
				state_Ns[nFound] = it.state ;
				nFound++;
			}	
		}
		return state_Ns;
}

//FUNCTION for GPA calculation
exports.gpa = (studNum , school) => {
//declarations for data from school object
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

///////////////////////////////////////////////////////////////////////////////////////////
 var scoreChart = [];
   var creditArray = [];
   var totalCredits = 0;
   
   for(index = 0; index < coreSet.length; index++ ){ //4
//loops throught all of the names of school.course.id
        for(var name of student_CNs) {

            if(name==coreSet[index].id) {
                 //if there is a name match set these 
                 scoreChart[scoreChart.length] = coreSet[index].pointscale;
                 creditArray[creditArray.length] = coreSet[index].credit;
                  totalCredits = totalCredits + coreSet[index].credit;
            }
        }
   }
   
///////////////////////////////////////////////////////////////////////////
    var myLetters = [ ];//I want to give myself a letter Grade for each item
    
    for(index = 0; index < scoreChart.length; index++){ //3             
		var max = 100;
		var grade = scoreChart[index];
//    myLetters = (Object.keys(scoreChart[index]));
		for(var letter in grade){                 
            if( (myGrades[index] >= grade[letter]) && (myGrades[index] < max ) ){
                myLetters[index] = letter;
			}
        max = grade[letter];	
		}
	}
		
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
    
//////////////////////////////////////////////////////////////////////////////////////        
    var totalWQP = 0;
    var GPA = 0;
    
    for(index = 0; index < weightedQP.length; index++){
//add all weighted quality points and credits
            totalWQP = totalWQP + weightedQP[index];
    }
//final GPA calculation: total weighted quality points / total number or credits    
    GPA = totalWQP / totalCredits;
    
return GPA;
}
////////////////////////////////////////////////////////////////////////////////////////////
//////////////////Thank You!!!!!!///////////////+/Happy//Hacking!!///  --run GNU, run FREE!! 
////////////////////////////////////////////////////////////////////////////////////////////
