function drawTables(){
  var barWidth=(310/MNPLUTOTable.length)*0.8;
  var barMargin=(310/MNPLUTOTable.length)*0.2;
  for (var i=0; i<MNPLUTOTable.getRowCount();i++){
  if (selectedButton == 0) {
  fill(0);
  noStroke();
    // push();
    // fill(200);
    // translate(0,i*(barWidth+barMargin));
  var NTAName=MNPLUTOTable.getString(i,'NTAName').split('-')[0];
  var MN=map(NTAName,bottomY,topY);
  var RC=map(MNPLUTOTable.getNum(i,'R/C'),0,200,leftX,rightX);
  fill('0');
  text(NTAName,10,95+i*30);
  fill(100, 102, 153);
  rect(5,80 + i*30,RC*1.5,20);
  fill(100, 102, 153);
  text(MNPLUTOTable.getNum(i,'R/C'),RC*1.5+10,95+i*30);
  }
  else if (selectedButton == 1){
    fill(220);
    noStroke();
      for (var j=0;j<bottomBudget.getRowCount();j++){
        var NTAName=bottomBudget.getString(j,'NTAName').split('-')[0];
        var MN=map(NTAName,bottomY,topY);
        var RC1=map(bottomBudget.getNum(j,'R/C'),0,200,leftX,rightX);
        console.log(RC);
        fill('0');
        text(NTAName,10,95+i*30);
        fill(200, 102, 153);
        rect(5,80 + i*30,RC*1.5,20);
        fill(200, 102, 153);
        text(bottomBudget.getNum(i,'R/C'),RC*1.5+10,95+i*30);
        }
    }

  fill(255, 0, 0);
  noStroke();
  for (var k=0; k<topBudget.getRowCount();k++){
  var NTAName=topBudget.getString(k,'NTAName').split('-')[0];
  var MN=map(NTAName,bottomY,topY);
  var RC2=map(topBudget.getNum(k,'R/C'),0,200,leftX,rightX);
  fill(200, 102, 153);
  rect(5,80 + i*30,RC*1.5,20);
  fill(200, 102, 153);
  text(topBudget.getNum(i,'R/C'),RC*1.5+10,95+i*30);
  fill('0');
  text(NTAName,10,95+i*30);
  }
}
else {
  fill(220);
  noStroke();
  for (var j=0; j<topBudget.getRowCount();j++){
  var NTAName=topBudget.getString(j,'NTAName').split('-')[0];
  var MN=map(NTAName,bottomY,topY);
  var RC3=map(topBudget.getNum(j,'R/C'),0,200,leftX,rightX);
  fill(200, 102, 153);
  rect(5,80 + i*30,RC*1.5,20);
  fill(200, 102, 153);
  text(topBudget.getNum(j,'R/C'),RC*1.5+10,95+i*30);
  fill('0');
  text(NTAName,10,95+i*30);
  }
  for (var k=0; k<bottomBudget.getRowCount();k++){
  var NTAName=bottomBudget.getString(k,'NTAName').split('-')[0];
  var MN=map(NTAName,bottomY,topY);
  var RC4=map(bottomBudget.getNum(k,'R/C'),0,200,leftX,rightX);
  console.log(RC);
  fill('0');
  text(NTAName,10,95+i*30);
  fill(200, 102, 153);
  rect(5,80 + i*30,RC*1.5,20);
  fill(200, 102, 153);
  text(bottomBudget.getNum(i,'R/C'),RC*1.5+10,95+i*30);

}
}
print('New tables created...');
}
