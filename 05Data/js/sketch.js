Var movieTitles=["Taxi Driver", "Godfather Part 1","Fifth Element","Forzen","Dune"];
var scores=[6,9,8.5,10,3];
var lengthMultiplier=50;

function setup() {
	createCanvas(800,800);
	background(100);
	textFont('Roboto');
	textAlign(RIGHT,CENTER);
}
function draw() {
	fill(0);
	for (var i=0; i<scores,length;i++) {
		rect[100,50+20*i,scores[i]*5,10];
	}
	for (var i=0;i<movieTitles,length;i++){
		text(movieTitles[1],110,50+20*i)
	}
	for (var i=0; i<scores,length;i++){
		text(scores[i],scores[i]*lengthMultiplier,50+20*i);
	}
}
