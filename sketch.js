var bg,bgImg;
var deepti , dImg
var ghost, ghostImg
var M, MImg;
var loketImg, loket

function preload(){
  bgImg = loadImage("bg.png")
  dImg = loadImage("d.png")
  ghostImg = loadImage("ghost.png")
  MImage = loadImage("m.png")
  loketImg = loadImage("locket.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  deepti = createSprite(200,680)
  deepti.addImage(dImg)
  deepti.scale = 0.5

 ghost = createSprite(1450,450)
 ghost.addImage(ghostImg)
 ghost.scale = 0.8

 M = createSprite(430,600)
 M.addImage(MImage)
 M.scale = 0.3

loket = createSprite(405,590)
loket.addImage(loketImg)
loket.scale = 0.005
}

function draw(){

  background(bgImg)




  drawSprites()
}





