var cat,mouse, bg,background_image;
var cat_sitting,cat_walking,cat_collision;
var mouse_cheese,mouse_teasing,mouse_colllision;




function preload() {
    //load the images here
    background_image = loadImage("images/garden.png");
    cat_sitting = loadAnimation("images/cat1.png");
    cat_walking = loadAnimation("images/cat2.png","images/cat3.png");
    cat_collision = loadAnimation("images/cat4.png");
    mouse_cheese = loadAnimation("images/mouse1.png");
    mouse_teasing = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse_colllision = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
   bg = createSprite(500,500,1000,800);
   bg.addImage(background_image);
   bg.scale=1.4;

   cat = createSprite(800,600,10,10);
   cat.addAnimation("cat_sitting",cat_sitting);
   cat.addAnimation("cat_walking",cat_walking);
   cat.addAnimation("cat_collision",cat_collision);
   cat.scale=0.2;

   mouse = createSprite(300,600,10,10);
   mouse.addAnimation("mouse_cheese",mouse_cheese);
   mouse.addAnimation("mouse_teasing",mouse_teasing);
   mouse.addAnimation("mouse_collision",mouse_colllision);
   mouse.scale = 0.2;

}

function draw() {

   background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width -mouse.width)/2){
    cat.changeAnimation("cat_collision",cat_collision);
    mouse.changeAnimation("mouse_collision",mouse_colllision);
    cat.velocityX= 0;
    cat.x =400;

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("LEFT_ARROW")){
    cat.velocityX=-2;
    cat.changeAnimation("cat_walking",cat_walking);
    mouse.changeAnimation("mouse_teasing",mouse_teasing);
}

}
