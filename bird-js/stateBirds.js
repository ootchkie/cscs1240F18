/********************Directions for in class assignment 11/13/2018*************************************************
In conversion.js 

export a function that returns an array of state names of of states that have a given bird name as the state bird.

the function will be passed the array given in state birds.txt in the course repo. the function should throw a
'invalid bird' if no state has the bird.
*/
exports.sBirdsArray = 
[{state:'Alabama',bird:'Yellow-hammer',date:1927},
{state:'Alaska',bird:'Alaska willow ptarmigan',date:1955},
{state:'Arizona',bird:'Coues cactus wren',date:1931},
{state:'Arkansas',bird:'Mocking bird',date:1929},
{state:'California',bird:'California valley quail',date:1931},
{state:'Colorado',bird:'Lark bunting',date:1931},
{state:'Connecticut',bird:'American robin',date:1943},
{state:'Delaware',bird:'Blue hen chicken',date:1939},
{state:'Florida',bird:'Mockingbird',date:1927},
{state:'Georgia',bird:'Brown thrasher',date:1970},
{state:'Hawaii',bird:'Nene',date:1957},
{state:'Idaho',bird:'Mountain bluebird',date:1931},
{state:'Illinois',bird:'Cardinal',date:1929},
{state:'Indiana',bird:'Cardinal',date:1933},
{state:'Iowa',bird:'Eastern goldfinch',date:1933},
{state:'Kansas',bird:'Western meadowlark',date:1937},
{state:'Kentucky',bird:'Kentucky cardinal',date:1926},
{state:'Louisiana',bird:'Brown pelican',date:1966},
{state:'Maine',bird:'Chickadee',date:1927},
{state:'Maryland',bird:'Baltimore oriole',date:1947},
{state:'Massachusetts',bird:'Chickadee',date:1941},
{state:'Michigan',bird:'Robin red breast',date:1931},
{state:'Minnesota',bird:'Common loon',date:1961},
{state:'Mississippi',bird:'Mockingbird',date:1941},
{state:'Missouri',bird:'Bluebird',date:1927},
{state:'Montana',bird:'Western meadowlark',date:1931},
{state:'Nebraska',bird:'Western meadowlark',date:1929},
{state:'Nevada',bird:'Mountain bluebird',date:1967},
{state:'New Hampshire',bird:'Purple finch',date:1957},
{state:'New Jersey',bird:'Eastern goldfinch',date:1935},
{state:'New Mexico',bird:'Chaparral bird',date:1949},
{state:'New York',bird:'Bluebird',date:1970},
{state:'North Carolina',bird:'Cardinal',date:1943},
{state:'North Dakota',bird:'Western meadowlark',date:1947},
{state:'Ohio',bird:'Cardinal',date:1933},
{state:'Oklahoma',bird:'Scissor-tailed flycatcher',date:1951},
{state:'Oregon',bird:'Western meadowlark',date:1927},
{state:'Pennsylvania',bird:'Ruffed grouse',date:1931},
{state:'Rhode Island',bird:'Rhode Island red',date:1954},
{state:'South Carolina',bird:'Carolina wren',date:1948},
{state:'South Dakota',bird:'Ring-necked pheasant',date:1943},
{state:'Tennessee',bird:'Mockingbird',date:1933},
{state:'Texas',bird:'Mockingbird',date:1927},
{state:'Utah',bird:'California gull',date:1955},
{state:'Vermont',bird:'Hermit thrush',date:1941},
{state:'Virginia',bird:'Cardinal',date:1950},
{state:'Washington',bird:'Willow goldfinch',date:1951},
{state:'West Virginia',bird:'Cardinal',date:1949},
{state:'Wisconsin',bird:'Robin',date:1949},
{state:'Wyoming',bird:'Meadowlark',date:1927}]
/*
funBirds = (wildBird , wildArray) => {
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

console.log(funBirds('Cardinal', sBirdsArray));*/
