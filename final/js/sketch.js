var SpringTab;
var SummerTab;
var FallTab;
var WinterTab;
var OverallTab;
var topBudget = new p5.Table;
var bottomBudget = new p5.Table;

function Preload(){
	SpringTab=loadTable(Data/Spring.csv);
	SummerTab=loadTable(Data/Summer.csv);
	FallTab=loadTable(Data/Fall.csv);
	WinterTab=loadTable(Data/Winter.csv);
	OverallTab=loadTable(Data/Overall.csv);
	console.log('Done loading table...');
}

function setup() {
	createCanvas(1200,800);
	textSize(10.5);
  textFont('Roboto');
  console.log('Setup complete...');
	print(OverallTab.getRowCount()+'rows downloading');
	print(OverallTab.getColumnCount()+'columns downloading');
	createNewTable();
	noLoop();
}

function drawLabels() {
  fill(0);
  textAlign(LEFT, CENTER);
  textSize(12);
  text("Noise Complaints alongside Broadway", textLeft - 15, topY - 25);



	function createNewTable(){
		topBudget.addColumn('NTAName');
		bottomBudget.addColumn('NTAName');
		topBudget.addColumn('Count_All');
		bottomBudget.addColumn('Count_All');
		for var(i=0,i<OverallTab.getRowCount();i++) {
			var CountAll=OverallTab.getNum(i,Count_All);
			

		}

	}


function draw() {
	if (mouseIsPressed){
		fill(0);
	} else {
		fill(255);
	}
	ellipse(mouseX,mouseY,80,80);
}
