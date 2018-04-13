// ***** Global variables ***** //
var MNPLUTOTable;
var topY = 50;
var bottomY = 500;
var leftX = 50;
var rightX = 700;
var textLeft = 30;
var buttonLabels = ['All R/C FAR', '20+ R/C FAR', '< 20 R/C FAR'];
var buttonStartX = 320;
var buttonStartY = 15;
var buttonLength = 120;
var buttonHeight = 20;
var buttonSpacing = 10;
var selectedButton = 0;
var topBudget = new p5.Table;
var bottomBudget = new p5.Table;


// ***** Preload function ***** //
function preload(){
  MNPLUTOTable=loadTable('MN/Asm5.csv','csv','header');
  console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(1500, 800);
  textSize(10.5);
  textFont('Roboto');
  console.log('Setup complete...');
  print(MNPLUTOTable.getRowCount() + ' rows loaded...');
  print(MNPLUTOTable.getColumnCount() + ' columns loaded...');
  createNewTable();
  noLoop();
}

// ***** Labels Function ********* //
function drawLabels() {
  // fill(100, 102, 153);
  fill(0);
  textAlign(LEFT, CENTER);
  textSize(12);
  text("Neighborhoods: Residential FAR to Commercial FAR", textLeft - 15, topY - 25);
}
//   textAlign(RIGHT, CENTER);
//   for (var i = 0; i < 11; i++) {
//     noStroke();
//     text(i, textLeft, map(i, "MN01", "MN15", bottomY, topY));
//     stroke(200);
//     line(textLeft + 10, map(i, "MN01", "MN15", bottomY, topY), rightX + 10, map(i, "MN01", "MN15", bottomY, topY));
//   }
//   console.log("labels are ok");
//   textAlign(CENTER, CENTER);
//   for (var i = 0; i < 4; i++) {
//     noStroke();
//     text(i, map(i, 1900, 2020, leftX, rightX), bottomY + 25);
//     stroke(200);
// 		strokeWeight(2);
//     line(map(i, 1900, 2020, leftX, rightX), bottomY + 12, map(i, 1900, 2020, leftX, rightX), bottomY + 5);
//   }

// ***** Create new table function ******* //
function createNewTable(){
  topBudget.addColumn('NTAName');
  topBudget.addColumn('R/C');
  bottomBudget.addColumn('NTAName');
  bottomBudget.addColumn('R/C');
  for (var i = 0; i < MNPLUTOTable.getRowCount(); i++) {
    var RC = MNPLUTOTable.getNum(i, 'R/C');
    console.log(RC);
    if (RC >= 20) {
      var newRow = topBudget.addRow();
      newRow.setString('NTAName',MNPLUTOTable.getString(i,'NTAName'));
      newRow.setNum('R/C', MNPLUTOTable.getNum(i, 'R/C'));
    }
    else {
      var newRow = bottomBudget.addRow();
      newRow.setString('NTAName',MNPLUTOTable.getString(i,'NTAName'));
      newRow.setNum('R/C', MNPLUTOTable.getNum(i, 'R/C'));
    }
  }
  print('New tables created...');
}

// ***** Draw FAR function ***** //
function drawTables(){
  if (selectedButton == 0) {
    fill(0);
    noStroke();
    for (var i=0; i<MNPLUTOTable.getRowCount();i++){
      var barWidth=(310/MNPLUTOTable.length)*0.8;
      var barMargin=(310/MNPLUTOTable.length)*0.2;
      var NTAName=MNPLUTOTable.getString(i,'NTAName').split('-')[0];
      var MN=map(NTAName,bottomY,topY);
      var RC=map(MNPLUTOTable.getNum(i,'R/C'),0,200,leftX,rightX);
      fill(100, 102, 153);
      rect(5,80 + i*30,RC*1.5,20);
      fill('0');
      text(NTAName,10,95+i*30);
      fill(100, 102, 153);
      textStyle(BOLD);
      text(MNPLUTOTable.getNum(i,'R/C'),RC*1.5+10,95+i*30);
    }
  }

  else if (selectedButton == 1){
    fill(220);
    noStroke();
    for (var k=0; k<topBudget.getRowCount();k++){

      var NTANameT=topBudget.getString(k,'NTAName').split('-')[0];
      var MN=map(NTANameT,bottomY,topY);
      var RC2=map(topBudget.getNum(k,'R/C'),0,200,leftX,rightX);
      fill(200, 100, 153);
      rect(5,80 + k*30,RC2*1.5,20);
      fill('30');
      textSize(10.5);
      textAlign(LEFT);
      text(NTANameT,10,82+k*30);
      fill(220, 150, 153);
      textStyle(BOLD);
      text(topBudget.getNum(k,'R/C'),RC2*1.5+10,82+k*30);
    }
  }
else {
  fill(220);
  noStroke();
    for (var k=0; k<bottomBudget.getRowCount();k++){
      var NTANameB=bottomBudget.getString(k,'NTAName').split('-')[0];
      var MN=map(NTANameB,bottomY,topY);
      var RC4=map(bottomBudget.getNum(k,'R/C'),0,200,leftX,rightX);
      fill(200, 100, 153);
      rect(5,80 + k*30,RC4*1.5,20);
      fill('30');
      textSize(10.5);
      textAlign(LEFT);
      text(NTANameB,10,82+k*30);
      fill(220, 150, 153);
      textStyle(BOLD);
      text(bottomBudget.getNum(k,'R/C'),RC4*1.5+15,82+k*30);
    }
  }
}


// ***** Draw buttons function ***** //
function drawButtons(){
  textAlign(CENTER, TOP);
  textSize(12);
  for (var i = 0; i < buttonLabels.length; i++) {
    if (selectedButton == i) {
      fill(200);
    }
    else {
      fill(240);
    }
    stroke(100);
    rect(buttonStartX + i * (buttonLength + buttonSpacing), buttonStartY, buttonLength, buttonHeight);
    fill(0);
    noStroke();
    text(buttonLabels[i], buttonStartX + i * (buttonLength + buttonSpacing) + buttonLength/2, buttonStartY + 2);
  }
}
// ***** Draw function ***** //
function draw(){
  background(255);
  drawTables();
  drawLabels();
  drawButtons();
}
// ****** Mouse pressed function ******* //
function mousePressed(){
  if (mouseX >= buttonStartX && mouseX <= (buttonStartX + buttonLength) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)) {
    selectedButton = 0;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 2 + buttonSpacing) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 1;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 3 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 2;
    redraw();
  }
}
