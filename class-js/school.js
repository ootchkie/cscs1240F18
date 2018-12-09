exports.school = {
gradeScale: { 'A':4, 'A-':3.7, 'B+':3.3, 'B':3, 'B-':2.7, 'C+':2.3, 'C':2, 'D':1, 'F':0 },

course: [
{ id:'READ', credit:2, pointscale:{ 'A':93, 'A-':90, 'B+':87, 'B':83, 'B-':80, 'C+':75, 'C':70, 'D':65, 'F':0 } },
{ id:'WRIT', credit:2, pointscale:{ 'A':93, 'A-':90, 'B+':87, 'B':83, 'B-':80, 'C+':75, 'C':70, 'D':65, 'F':0 } },
{ id:'NUMB', credit:3, pointscale:{ 'A':95, 'A-':90, 'B+':85, 'B':80, 'B-':75, 'C+':70, 'C':65, 'D':60, 'F':0 } },
{ id:'COMP', credit:4, pointscale:{ 'A':90, 'B':80, 'C':70, 'D':60, 'F':0 } },
],

student: [
{ id:101, course:[ { id:'WRIT', points:93 }, { id:'READ', points:91 }, { id:'NUMB', points:86 } ] },
{ id:102, course:[ { id:'NUMB', points:94 }, { id:'COMP', points:91 } ] },
{ id:103, course:[ { id:'NUMB', points:96 }, { id:'COMP', points:92 }, { id:'WRIT', points:86 } ] }
]}
