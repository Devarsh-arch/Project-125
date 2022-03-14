leftWrist= 0;
rightWrist= 0;
difference= 0;

function preload(){

}

function setup(){
	canvas= createCanvas(400, 400);
	video= createCapture(VIDEO);
	video.size(400, 400);
	poseNet= ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw(){
	canvas.background('yellow');
	textSize('20');
	fill('black');
	text("Devarsh" , 50, 50);
}

function modelLoaded(){
	console.log("poseNet Is Initialized");
}

function gotPoses(results){
	console.log(results);
	leftWrist= results[0].pose.leftWrist;
	rightWrist= results[0].pose.rightWrist;
	difference= leftWrist - rightWrist;
	Math.floor(random);
	textSize(difference);
}