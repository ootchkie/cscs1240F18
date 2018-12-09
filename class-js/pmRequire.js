const mod = require( './pmClass.js' );
/*
while( mod.school.course.id != 'NUMB'){
	is course id 'NUMB'
   		yes: display course id credit
    		no: go to the next id
			repeat until match
}
*/
var credit;
var x = 0;

while( mod.school.course[x].id != 'NUMB'  ) {
	if(mod.school.course[x].id == 'NUMB')
		//return credit;
		console.log( mod.school.course[x].credit );
	else x++;
}
