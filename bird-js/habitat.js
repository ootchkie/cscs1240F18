exports.habitat = {"identification":[{"terrestrial":true},{"type":"temperate"},{"names":["Mediterranean Basin","Iberian conifer forests"]}],"plant":{"tree":[{"common name":"Salzmann pine","classification":"Pinus nigra salzmannii"},{"common name":"Scotch pine","classification":"Pinus sylvestris"},{"common name":"maritime pine","classification":"Pinus pinaster"},{"common name":"Alpine pine species","classification":"Pinus uncinata"}]},"animal":{"bird":[{"common name":"Spanish imperial eagle","classification":"Aquila heliaca adalberti"},{"common name":"golden eagle","classification":"A. chrysaetos"},{"common name":"black vulture","classification":"Aegypius monachus"},{"common name":"griffon vulture","classification":"Gyps fulvus"},{"common name":"black-shouldered kite","classification":"Elanus caeruleus"},{"common name":"black stork","classification":"Ciconia nigra"},{"common name":"honey buzzard","classification":"Pernis apivorus"}],"mammal":[{"common name":"Gredos ibex","classification":"Capra pyrenaica victoriae"},{"common name":"wolf","classification":"Canis lupus"},{"common name":"Red deer","classification":"Cervus elaphus elaphus"},{"common name":"roe deer","classification":"Capreolus capreolus"}]},location:"Spain",weather:"nice"};
                            //(studentID , dataSet)
var classForCommon = function( commonName , habitat ) {
	var animals = habitat.animal.bird;
	for( var aBird of animals ) {
		if( aBird['common name'] == commonName ) return aBird['classification'];
		commonName = commonName.replace('-', ' ');
		if( aBird['common name'] == commonName ) return aBird['classification'];
		commonName = commonName.toLowerCase;
		if( aBird['common name'] == commonName ) return aBird['classification'];
	}	
}	

var theClass = classForCommon( "Black-stork", habitat);
console.log( theClass );
