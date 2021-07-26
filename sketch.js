var back
var iss
var launchpad
var spacecraft
var point

function setup() {

  createCanvas(windowWidth,windowHeight);
  back = createSprite(windowWidth/2,windowHeight/2)
  iss = createSprite(windowWidth/6,windowHeight/2.6)
  launchpad = createSprite(windowWidth/1.2,windowHeight/1.5)
  spacecraft = createSprite(windowWidth/1.3,windowHeight/1.6)
  point = createSprite(windowWidth/8,windowHeight/2.4,1,1)

}

function preload(){

   back1 = loadImage("spacebg.jpg")
   iss1 = loadImage("iss.png")
   launchpad1 = loadImage("launchpad.png")
   spacecraft1 = loadImage("spacecraft1.png")
   spacecraft2 = loadImage("spacecraft2.png")
   spacecraft3 = loadImage("spacecraft3.png")
   spacecraft4 = loadImage("spacecraft4.png")

}

function draw() {

  background("black");  

  back.addImage(back1)
  iss.addImage(iss1)
  launchpad.addImage(launchpad1)
  spacecraft.addImage(spacecraft1)

  back.scale = 3
  launchpad.scale = 0.8
  spacecraft.scale = 0.5

  point.shapeColor = "blue"

  //movement
  if(keyDown("right")){

    spacecraft.x = spacecraft.x + 2
    //spacecraft.rotation = spacecraft.rotation + 1
    spacecraft.addImage(spacecraft4)

  }

  if(keyDown("left")){

    spacecraft.x = spacecraft.x - 10
    //spacecraft.rotation = spacecraft.rotation - 1
    spacecraft.addImage(spacecraft3)

  }

  if(keyDown("down")){

    spacecraft.y = spacecraft.y + 2

  }

  if(keyDown("up")){

    spacecraft.y = spacecraft.y - 2
    spacecraft.addImage(spacecraft2)

  }

  drawSprites();

  if(spacecraft.isTouching(point)){

   fill("white")
   textSize(100)
   text("Docking Successfull",windowWidth/4,windowHeight/2)

  }

}