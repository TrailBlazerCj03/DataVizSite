var movieTable
var StartYear=1990;
var EndYear=2020;
var startScore=0;
var endScore=10;
var StartX=50;
var EndX=700;
var StartY=400;
var EndY=100;



function preload() {
	movieTable = loadTable('../Data/tmdb_5000_movies.csv','csv','header');
	console.log("Table has been loaded...")

}

function setup() {
	createCanvas(800,800);
	background(100);
	textFont('Roboto');
	print(movieTable.getRowCount());
	print(movieTable.getColumnCount());

	noLoop();
}

function draw() {
	for (var i=0; i<movieTable.getRowCount();i++) {
		var score=movieTable.getNum(i,'vote_average');
		var releaseDate=movieTable.getString(i,'release_date');
		var dataArray = releaseDate.split('-');
		var year=dataArray[0];
		var positionX = map(year,StartYear,EndYear,StartX,EndX);
		var positionY = map(score,startScore,endScore,StartY,EndY);
		

	}

}
