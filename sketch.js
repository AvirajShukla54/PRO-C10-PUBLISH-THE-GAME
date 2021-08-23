

var Red;
var Green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
    createCanvas(400,400);

    Red = createButton("RED");
    Red.position(100,60);
    Red.mousePressed(bg_red);


    Green = createButton("GREEN");
    Green.position(250,60);
    Green.mousePressed(bg_green)
    
}

function draw(){
    background(r,g,b);
}


function bg_red(){
    r = 255;
    g = 0;
    b = 0;
}

function bg_green(){
    r = 0;
    g = 255;
    b = 0;
}













