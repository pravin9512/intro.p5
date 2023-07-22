function preload(){

}

function setup(){
canvas=createCanvas(640,480);
canvas.position(250,250);
video=createCapture(VIDEO)
video.hide()
}

function draw(){
image(video,0,0,640,480);

// circle
fill(color(66, 135, 245));
strokeWeight(2);
stroke(color(255,255,255));
circle(50, 60, 70);

// ellipse
fill(color(245, 66, 66));
strokeWeight(2);
stroke(color(255,255,255));
ellipse(180, 290, 60, 40);

// rectangle
fill(color(250, 206, 10));
strokeWeight(2);
stroke(color(255,255,255));
rect(50, 160, 55, 55);
}

function take_snapshot(){
    save(cer.png)
}


