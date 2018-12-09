//my attempt to convert decimal to binary

var myNumber = 14;

var bitOne = false;
var bitValue = 2;
var bitPlace = 2;

if (myNumber/2 !== Math.floor(myNumber/2)) {
		bitOne = true;//therefore least significant bit is 1
		console.log(myNumber.toString(), " is odd ," + bitOne.toString()); 
		myNumber = myNumber - 1;
}	else 	{
		console.log(myNumber.toString(), " is even");
		bitOne = 0;
}
	

while (myNumber/2 >= bitValue) { 
		bitValue = (bitValue*2);
		bitPlace += 1;
	}

	
if (myNumber == 1) {
	bitPlace = 1;
	bitValue = 1;
	console.log("the number is " + bitPlace.toString() + " bit long");	
	console.log("the largest bit Value is " + bitValue.toString());
}
else
{
	console.log("the number is " + bitPlace.toString() + " bits long");
	console.log("the largest bit Value is " + bitValue.toString());
}	
