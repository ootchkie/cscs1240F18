var arrayOfObjects = [ { A: 93,
    'A-': 90,
    'B+': 87,
    B: 83,
    'B-': 80,
    'C+': 75,
    C: 70,
    D: 65,
    F: 0 },
  { A: 95,
    'A-': 90,
    'B+': 85,
    B: 80,
    'B-': 75,
    'C+': 70,
    C: 65,
    D: 60,
    F: 0 },
  { A: 90, B: 80, C: 70, D: 60, F: 0 } ];

var myGrades  = [ 96, 92, 86 ];
var myLetters = [ ];//I want to give myself a letter Grade for each item
var myScores  = [ ];
var eat = [ ];

for(var i = 0; i < myGrades.length; i++){              
    
    myLetters = (Object.keys(arrayOfObjects[i]));

//     console.log(myLetters);
    
     myScores = ( Object.values(arrayOfObjects[i]) );

        var x = myScores.length; 
        while( x >= 0 ){
              
            if(myScores[x] < myGrades[i]){
             eat[i] = myLetters[x];
            //console.log(myLetters[x]);
            }
        x--;    
        }    
}
console.log(eat);
