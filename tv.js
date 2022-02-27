img = "";
objects = [];

function preload(){
    img = loadImage("tv.jpeg")
}

function setup(){
canavas = createCanvas(640, 420);
canavas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("statuss").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
console.log("loaded");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(){
if (error){
    console.error(error);
}
console.log(results);
objects = results; 
}

function draw(){
    image(img, 0, 0,640, 420);
     
    if (status != ""){
        
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Statusss : Objecccct Detttteccteddd";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function homepage(){
    window.location = "page1.html";
}