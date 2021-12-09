var spacecraft,spacecraftImage
var bg,bgImage
var aline,alineImage

function preload(){
spacecraftImage = loadImage("spacecraft.png");
bgImage = loadImage("bg.gif")
alineImage = loadImage("aline.png")
}

function setup(){
createCanvas(600,600);

bg = createSprite(200,200);
bg.addImage(bgImage);
bg.scale = 2

spacecraft = createSprite(260,500);
spacecraft.addImage(spacecraftImage);
spacecraft.scale = 0.7

aline = createSprite(200,200);
aline.addImage(alineImage);
aline.scale = 0.5

}

function draw(){
background("black")
if(keyDown("right")){
spacecraft.x = spacecraft.x+2
}
if(keyDown("left")){
spacecraft.x = spacecraft.x-2
}
drawSprites();
}


