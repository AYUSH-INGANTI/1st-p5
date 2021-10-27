

function setup() {
    canvas = createCanvas(950, 650);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 175, 50, 550, 500);
    rect(0, 0, 10, 610);
    rect(0, 0, 910, 10);
    rect(900, 10, 10, 601);
    rect(10, 600, 901, 10);
}

function tk(){
    save("hello.png")
}