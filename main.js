img="";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center()
}

function preload()
{
    img = loadImage('bed_room.jpeg');
}

function draw()
{
    image( img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 240, 125);
    noFill();
    stroke("#FF0000");
    rect(200, 100, 350, 640);

    fill("#FF0000");
    text("Fan", 290, 25);
    noFill();
    stroke("#FF0000");
    rect(280, 1, 160,90);
    
}