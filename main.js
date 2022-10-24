noseX = 0;
noseY = 0;
diffrence = 0;
rightWristX = 0;
leftWristX = 0;


function setup(){
    video  = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded() {
    console.log("PoseNet is Initialized ")
}

function gotPose(results)
{
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX); 
        
        console.log("leftWristX = "+ leftWristX + "rightWristX = "+ rightWristX + "diffrence = "+ diffrence);

    }
}
function draw(){
    background('969A97');
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
        fill('#F90093');
        stroke('#F90093');
        square(noseX,noseY, diffrence);

}
