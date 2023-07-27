img = "";
status = "";

function preload()
{
img = loadImage('Tigers.jpg');
}

function setup()
{
    canvas = createCanvas(500, 350);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    
}

function draw()
{
    image(img, 0, 0, 500, 350);
    
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}