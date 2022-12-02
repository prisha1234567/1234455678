objects = []
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelloaded)
    document.getElementById("status").innerHTML = "status:detecting objects";


}
status = ""
img = ""
function preload() {
    img = loadImage("dog_cat.jpg")
}
function draw() {
    image(img, 0, 0, 640, 420);


    if (status != "") {
        fill("orange");
        for (i = 0; i < objects.length; i++) {
            percent = floor(objects[i].confidence * 100);

            text(objects[i].label+" "+percent, objects[i].x, objects[i].y - 10);
            noFill();
            stroke("black");
            strokeWeight(3);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    
        }
    }
    

}
   
function modelloaded() {
    console.log("modelloaded");
    status = true;
    objectDetector.detect(img, gotresult);

}
function gotresult(error, results) {
    if (error) {
        console.error(error);


    }
    else {
        console.log(results);
        objects = results;
    }
}