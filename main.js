var img = "";
status = "";
objects = [];

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
        objects = results;
    }
}

function preload() {
    img = loadImage("dog_cat.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);
    if (status != "") {
        for (var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML =
                "status: objects detected";
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(
                objects[i].label + " " + percent + "%",
                objects[i].x,
                objects[i].y
            );
            noFill();
            stroke("red");
            rect(
                objects[i].x,
                objects[i].y,
                objects[i].width,
                objects[i].height
            );
        }
    }
}
