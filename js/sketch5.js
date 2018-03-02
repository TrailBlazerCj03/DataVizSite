var MNPLUTOTable;
var topY = 50;
var bottomY = 500;
var leftX = 50;
var rightX = 700;
var textLeft = 30;


function preload(){
  MNPLUTOTable=loadTable('MN/Asm5.csv','csv','header');
  console.log('Done loading table...');
}

function setup(){
  createCanvas(800, 800);
  textSize(12);
  textFont('Roboto');
  console.log('Setup complete...');
  print(MNPLUTOTable.getRowCount() + ' rows loaded...');
  print(MNPLUTOTable.getColumnCount() + ' columns loaded...');
  var barWidth=(310/MNPLUTOTable.length)*0.8;
  var barMargin=(310/MNPLUTOTable.length)*0.2;
  noLoop();
}

function drawLabels() {
  fill(0);
  textAlign(LEFT, CENTER);
  text("Neighborhoods", textLeft - 15, topY - 25);
  textAlign(RIGHT, CENTER);
  for (var i = 0; i < 11; i++) {
    noStroke();
    text(i, textLeft, map(i, "MN01", "MN15", bottomY, topY));
    stroke(200);
    line(textLeft + 10, map(i, "MN01", "MN15", bottomY, topY), rightX + 10, map(i, "MN01", "MN15", bottomY, topY));
  }
  console.log("labels are ok");
  textAlign(CENTER, CENTER);
  for (var i = 0; i < 4; i++) {
    noStroke();
    text(i, map(i, 1900, 2020, leftX, rightX), bottomY + 25);
    stroke(200);
		strokeWeight(2);
    line(map(i, 1900, 2020, leftX, rightX), bottomY + 12, map(i, 1900, 2020, leftX, rightX), bottomY + 5);
  }
}


  function drawTables(){
    fill(0);
    noStroke();
    for (var i=0; i<MNPLUTOTable.getRowCount();i++){
      push();
      fill('steelblue');
      translate(0,i*(barWidth+barMargin));

    var Neighborhood=MNPLUTOTable.getString(i,'Neighborhood').split('-')[0];
    var MN=map(Neighborhood,bottomY,topY);
    var RC=map(MNPLUTOTable.getNum(i,'R/C'),0,200,leftX,rightX);

    rect(0,0,MNPLUTOTable[i],barWidth);
    fill('#FFF');
    text(MNPLUTOTable[i],5,barWidth/2+5);
  }
  print('New tables created...');
}
