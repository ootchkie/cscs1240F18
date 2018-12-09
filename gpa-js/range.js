var gradeTest = (  ) => {
    var index = 0;
    var myGrades = [93, 91, 86];
    var scoreChart = [ { A: 93,'A-': 90,'B+': 87,B: 83,'B-': 80,'C+': 75,C: 70,D: 65,F: 0 },
                    { A: 93,'A-': 90,'B+': 87,B: 83,'B-': 80,'C+': 75,C: 70,D: 65,F: 0 },
                    { A: 95,'A-': 90,'B+': 85,B: 80,'B-': 75,'C+': 70,C: 65,D: 60,F: 0 } ];
 
    var myLetters = [ ];//I want to give myself a letter Grade for each item
    
    for(index = 0; index < scoreChart.length; index++){ //3             
		var max = 100;
		var grade = scoreChart[index];
		
        for(var item in grade){                 
        //console.log(myGrades[index]);
        //console.log(grade[item]);
            if( myGrades[index] >= grade[item] && myGrades[index] < max ){ 
                myLetters[index] = item;
			}
		//console.log(max);	
        max = grade[item];	
		}
 	}
 	
return myLetters;     
}    

console.log(gradeTest(  ));
