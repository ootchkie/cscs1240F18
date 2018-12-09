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
	return (feet)*0.3048;
}

//function to convert Grams to Ounces
exports.ounces = ( grams ) => {
	return (grams)*0.03527395;
}

//function to return tax rates
exports.tax = ( salary ) => {
	var percent = .25;
	var tax = salary*percent;
	if(salary >= 100000){percent = .331	}
return tax
}

//function to return multiple tax rates for individuals
exports.multiTax = ( salary ) => {
	var percent = .1;
	var tax;
	
	if((salary > 9525) && (salary <= 38700) ){percent = .12	}
	
	
	if((salary > 38700) && (salary <=82500) ){percent = .22	}
	if((salary > 82500) && (salary <=157500)){percent = .24	}
	if((salary > 157500) && (salary <=200000) ){percent = .32}
        if((salary > 200000) && (salary <=500000) ){percent = .35}
	if(salary > 500000){percent = .37}

	tax = percent*salary;

return (("percent is "+percent)+" tax is "+tax);	
}

//FUNCTION to return dog types
exports.dog = ( value ) => {
	
//condition for deciding parameter value type
if(typeof(value)=='number'){
var breed;

	//conditions for returning sizes
	if(value>=4 && value<6){
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
	if(value>=40 && value<50){
		return "X-large";
	}
	if(value>=60 && value<90){
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

//nodejs FUNCTION where I am trying to perform a GPA calculation
exports.gpa = (student , school) => {
//declarations for code
    var gradesArray = [];
    var courseArray = [];
    var creditArray = [];
    var lettersArray= {};
    var studentArray = [ student, gradesArray, courseArray, creditArray, lettersArray ]; 
    var ID = undefined;
//data from school object
    var dataSet = ( school.student );
    var loreSet = ( school.course );
    var gradeSet =( school.gradeScale );
//loop to match dataSet with student        
    for(var x = 0; x < dataSet.length; x++ ){
        
    //block to test for valid ID NUMB    
        if(dataSet[x].id == student){
            ID = x;//set ID if found
        }
    }
// // // // // // // // // // // // // // // // // // // // // // //      

//checks student's key value against undefined
    if(ID != undefined){ 
        //local array index
        var index = 0;
        
        for( var aCourse of dataSet[ID].course)
        { 
            var lettuce = aCourse.points;
            
            gradesArray[index] = lettuce; 		
        //increment array index
            index++;
        }
    //gradesArray now contains an array of grades for student
    }
    else
    {//throw an error
     console.error('error, student ID #' + student + ' not found');
    }

    
/*    
    try{
        dataSet[ID].id == student;
        }
    catch(err) {
            console.error(err);
        }
*/
        
//now I need to manipulate gradesArray give gpa for student
var gradesTotal = 0;var average = 0;var GPA = 0;var course = '';


for( var x=0; x < gradesArray.length; x++ )
        { 
            gradesTotal += gradesArray[x];
            
            var tomato = dataSet[ID].course[x].id;       
            
            courseArray[x] = tomato; 		
        //increment array index
            index++;
        }
//average = grades/gradesArray.length;
for( var x=0; x < loreSet.length; x++ )
        {
        for( var y=0; y < courseArray.length; y++ )
            {//check courseArray now against course names school.student 
            if( ( loreSet[x].id )==( dataSet[ID].course[y].id) ) 
                {//this part is not right yet ---
                    console.log((loreSet[x].id) +
                        " " +(loreSet[x].credit) + " " + (loreSet[x].pointscale));
                creditArray[y] = loreSet[x].credit;
                //lettersArray[ID] = loreSet[x].pointscale;
                  for( var pumpkin in loreSet[x].pointscale ){
                        lettersArray[y] = loreSet[x].pointscale;
                        //console.log(loreSet[x].pointscale[pumpkin]);
                    }
                }
            } 
        }
//console.log(lettersArray);
   // for( var pumpkin in loreSet.pointscale ){
//	console.log(loreSet.pointscale[pumpkin]);
   // }
    
//var studentArray = { student, gradesArray, courseArray, etc }
return (studentArray)
}
