var habitat = {"identification":[{"terrestrial":true},{"type":"temperate"},{"names":["Mediterranean Basin","Iberian conifer forests"]}],"plant":{"tree":[{"common name":"Salzmann pine","classification":"Pinus nigra salzmannii"},{"common name":"Scotch pine","classification":"Pinus sylvestris"},{"common name":"maritime pine","classification":"Pinus pinaster"},{"common name":"Alpine pine species","classification":"Pinus uncinata"}]},"animal":{"bird":[{"common name":"Spanish imperial eagle","classification":"Aquila heliaca adalberti"},{"common name":"golden eagle","classification":"A. chrysaetos"},{"common name":"black vulture","classification":"Aegypius monachus"},{"common name":"griffon vulture","classification":"Gyps fulvus"},{"common name":"black-shouldered kite","classification":"Elanus caeruleus"},{"common name":"black stork","classification":"Ciconia nigra"},{"common name":"honey buzzard","classification":"Pernis apivorus"}],"mammal":[{"common name":"Gredos ibex","classification":"Capra pyrenaica victoriae"},{"common name":"wolf","classification":"Canis lupus"},{"common name":"Red deer","classification":"Cervus elaphus elaphus"},{"common name":"roe deer","classification":"Capreolus capreolus"}]},location:"Spain",weather:"nice"};

console.log( 'for .... in loop for keys:');

	console.log( '\n' );

for(var item in habitat ) {
	console.log( item)
};
	console.log( '\n' );
	


console.log( 'for .... in loop for values:');

	console.log( '\n' );

for(var item in habitat ) {
	console.log( habitat[item] );
};
	console.log( '\n' );
	

