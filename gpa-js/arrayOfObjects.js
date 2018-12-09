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

var myGrades = [ 96, 92, 86 ];
var myLetters = [];//I want to give myself a letter Grade for each item
         
for(var a = 0; a < arrayOfObjects.length; a++){

    for(var item in arrayOfObjects[a]){//in takes keys
        
        if(arrayOfObjects[a][item] >= myGrades[a])
                           //item is the key 
             myLetters[myLetters.length] = (item)
        ;                      //length feeds array    
    }
}    
console.log(myLetters);
