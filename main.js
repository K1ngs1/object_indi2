var img = "";
status = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectdetecter = ml5.objectDetector("cocossd", modelLoaded);

    document.getElementById("status").innerHTML = "Status: detecting objects";
}

function modelLoaded() {
    console.log("model loaded");
    status = true;

    objectdetecter.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}

function preload() {
    img = loadImage("dog_cat.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Dog", 45, 75);
    noFill();
    stroke("red");
    rect(30, 60, 450, 350);

    fill("blue");
    text("Cat", 320, 120);
    noFill();
    stroke("blue");
    rect(300, 90, 270, 320);
}
