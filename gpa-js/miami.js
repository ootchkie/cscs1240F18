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
    
    myLetters[i] = (Object.getOwnPropertyNames(arrayOfObjects[i]));

    myScores[i] = ( Object.values(arrayOfObjects[i]) );

    for(var d in myScores[i]){
//         console.log( d );//all the numbers listed out,  what you want to compare
//       console.log( myGrades[i] );//your grades listed out,  matching to all the cases of d
//         console.log(myLetters[i].d);
        if( d <= myGrades[i] )
             eat[i] = d
        ;
    } 
}
console.log(eat);
