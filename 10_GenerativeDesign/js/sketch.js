var myFirstObject=[];

function Jitter(size,nervousness,outlineWidth){
	//properties
	this.x=400;
	this.y=400;
	this.diameter=size;
	this.jitterness=nervousness;
	this.distanceToMouse=222;
	this.myFill=0;
	this.outline=outlineWidth;
	this.color=false;

	//functions
	this.drawball=function(){
		if (this.color==true){
			fill(255,0,0);
			}
			else{
				fill(this.myFill);
			}

		ellipse(this.x, this.y, this.diameter, this.diameter);
	}
	this.update=function(){
		this.x=this.x+random(-this.jitterness,this.jitterness);
		this.y=this.y+random(-this.jitterness,this.jitterness);
		this.distanceToMouse=dist(mouseX,mouseY,this.x,this.y);
		this.myFill=map(this.distanceToMouse,0,800,0,255);
		this.checkPosition=function(){
			if (mouseX>(this.x-this.diameter/2) && mouseX<(this.X+this.diameter/2)){
				this.color=true;
			}

		}

	}
}

function setup(){
	createCanvas(1000,1000);
	for (var i=0;i<100;i++){
		var mySize=random(10,50);
		var myNervousness=random(2,3);
		var myWidth=random(1,5);
		myFirstObject.push(new Jitter(mySize,myNervousness,myWidth));
	}
}

function draw(){
	background(220);
	for (var i=0;i<myFirstObject.length;i++){
		myFirstObject[i].drawball();
		myFirstObject[i].update();
		if (myFirstObject[i].color==true){
			myFirstObject.splice(i,1);
		}
	}
	if (frameCount % 50==0){
		for (var i=0,i<50,i++){
			var mySize=random(10,50);
			var myNervousness=random(2,3);
			var myWidth=random(1,5);
			myFirstObject.push(new Jitter(mySize,myNervousness,myWidth));
		}
	}
	fill(0);
	text(str(myFirstObject.length),20,20);
}

function mousePressed(){
	for (var i=0;i<myFirstObject.length;i++);
	myFirstObject[i].checkPosition();
}
