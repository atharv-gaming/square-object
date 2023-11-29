img ="";
function setup(){
canvas = createCanvas(600,400)
canvas.center()
}
function preload(){
    img = loadImage("dog_cat.jpg")
}
function draw(){
    image(img,0,0,600,400)
    fill("red")
    text("dog",45,34)
    noFill()
    stroke("green")
    rect(10,30,450,350)
}